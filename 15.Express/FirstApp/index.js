const express = require('express');

const app = express();

app.use((req, res) => {
  console.log('We got a new request');
  // res.send('HELLO, We got your request. this is a response');
  // res.send({ color: 'red' });
  res.send('<h1>This is my web page!</h1>');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
