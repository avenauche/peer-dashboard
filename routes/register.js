const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db'); // adjust if needed

// GET register page
router.get('/', (req, res) => {
  res.render('register', { layout: false, title: 'Register' });
});

// POST register
router.post('/', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Hash the password using bcryptjs
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;

    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;

      const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(sql, [username, email, hash], (err, result) => {
        if (err) {
          console.error(err);
          return res.render('register', {
            layout: false,
            error: 'Database error',
          });
        }

        res.redirect('/login'); // success
      });
    });
  });
});
module.exports = router;