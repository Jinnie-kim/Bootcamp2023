const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
  const { name = 'Alex' } = req.cookies;
  res.send(`Hey there, ${name}`);
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
