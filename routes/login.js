const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SEC;

// GET login page
router.get('/', (req, res) => {
    res.render('login', { layout: false });
});

// POST login
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.render('login', {
            layout: false,
            error: 'All fields are required',
        });
    }

    // Check if user exists
    const query = 'SELECT * FROM users WHERE email = ? LIMIT 1';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.render('login', {
                layout: false,
                error: 'Database error',
            });
        }

        if (results.length === 0) {
            return res.render('login', {
                layout: false,
                error: 'Invalid email or password',
            });
        }

        const user = results[0];

        // Compare passwords
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch) {
                return res.render('login', {
                    layout: false,
                    error: 'Invalid email or password',
                });
            }

            // Create JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email, username: user.username },
                JWT_SECRET,
                { expiresIn: '1h' }
            );

            // Send JWT as cookie (secure way)
            res.cookie('token', token, {
                httpOnly: true,  // can't access via JavaScript
                secure: false,   // set to true in production (HTTPS)
                maxAge: 3600000  // 1 hour
            });

            res.redirect('/dashboard');
        });
    });
});

module.exports = router;
