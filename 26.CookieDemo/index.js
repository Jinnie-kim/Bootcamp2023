const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  res.send('Hey there,');
});

app.get('/setname', (req, res) => {
  // send a cookie
  res.cookie('name', 'Henry');
  res.cookie('animal', 'harlequin shrimp');
  res.send('ok sent you a cookie');
});

app.listen(3000, () => {
  console.log('Serving');
});
