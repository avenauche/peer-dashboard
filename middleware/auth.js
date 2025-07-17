const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SEC;

function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // attach user to request
        next();
    } catch (err) {
        console.error('JWT error:', err);
        res.redirect('/login');
    }
    
}

module.exports = authenticateToken;
