var express = require('express');
var router = express.Router();
var auth = require('../middleware/auth');
const activityData = [
  {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  },
  {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  },
  {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  },
  {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "2h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  },
    {
      "timestamp": "2025-07-14T12:00:00Z",
      "ttl": "24h",
      "clicksAllowed": 5,
      "numberOfIpsAllowed": 5,
      "totalClicksAllowed": 25,
      "totalClicksMade": 10
    },
    {
      "timestamp": "2025-07-14T12:30:00Z",
      "ttl": "24h",
      "clicksAllowed": 5,
      "numberOfIpsAllowed": 5,
      "totalClicksAllowed": 25,
      "totalClicksMade": 20
    },
    {
      "timestamp": "2025-07-14T13:00:00Z",
      "ttl": "24h",
      "clicksAllowed": 5,
      "numberOfIpsAllowed": 5,
      "totalClicksAllowed": 25,
      "totalClicksMade": 25
    },
    {
      "timestamp": "2025-07-14T14:00:00Z",
      "ttl": "24h",
      "clicksAllowed": 2,
      "numberOfIpsAllowed": 10,
      "totalClicksAllowed": 20,
      "totalClicksMade": 18
    },
    {
      "timestamp": "2025-07-14T15:00:00Z",
      "ttl": "24h",
      "clicksAllowed": 1,
      "numberOfIpsAllowed": 5,
      "totalClicksAllowed": 5,
      "totalClicksMade": 4
    },
  {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  }, {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  }, {
    "timestamp": "2025-07-14T12:00:00Z",
    "ttl": "24h",
    "clicksAllowed": 5,
    "numberOfIpsAllowed": 5,
    "totalClicksAllowed": 25,
    "totalClicksMade": 10
  }
  ];

router.get('/',auth, function (req, res, next) {
  const username = req.user.username;
  const userEmail = req.user.email;
  res.render('analytics', { title: 'dashboard-Analytics', activityData ,username,userEmail});
});

module.exports = router;
