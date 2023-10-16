const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisiismysecret')); // that string is going to be used by cookie parser to sign my cookies

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

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true });
  res.send('ok signed your fruit cookie');
});

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log('Serving');
});
