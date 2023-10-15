const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }

  res.send('Sorry Not an admin');
});

router.get('/topsecret', (req, res) => {
  res.send('this is top secert');
});

router.get('/deleteeverything', (req, res) => {
  res.send('OK DELETED IT ALL');
});

module.exports = router;
