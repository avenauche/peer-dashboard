var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');

router.get('/',auth, function(req, res, next) {
  const username = req.user.username;
  const userEmail = req.user.email;
  res.render('dashboard', { title: 'Express' , username,userEmail});
});

module.exports = router;
