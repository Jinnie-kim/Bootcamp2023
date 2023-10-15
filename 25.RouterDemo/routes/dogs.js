const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ALL DOGS');
});

router.get('/:id', (req, res) => {
  res.send('One DOGS');
});

router.get('/:id/edit', (req, res) => {
  res.send('Editing One DOGS');
});

module.exports = router;
