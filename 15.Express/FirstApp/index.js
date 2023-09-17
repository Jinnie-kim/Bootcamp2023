const express = require('express');

const app = express();

// app.use((req, res) => {
//   console.log('We got a new request');
//   res.send('HELLO, We got your request. this is a response');
//   res.send({ color: 'red' });
//   res.send('<h1>This is my web page!</h1>');
// });

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get('/cats', (req, res) => {
  res.send('MEOW!!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!!');
});

// root route
app.get('/', (req, res) => {
  res.send('This is the home page');
});

// This code come at the end
// If I write this code up top, all of other method will be ignored.
app.get('*', (req, res) => {
  res.send("I don't know that path");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
