const express = require('express');
const app = express();
const morgan = require('morgan');

// app.use(morgan('tiny'));
app.use((req, res, next) => {
  // req.method = 'GET'; // even if you send as POST method, this will override
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I love dogs');
  next();
});

app.use((req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  res.send('sorry you need a password');
});

// app.use((req, res, next) => {
//   console.log('This is my first middleware!!');
//   return next();
// });

// app.use((req, res, next) => {
//   console.log('This is my second middleware!!');
//   return next();
// });

// app.use((req, res, next) => {
//   console.log('This is my third middleware!!');
//   return next();
// });

app.get('/', (req, res) => {
  console.log(`request date: ${req.requestTime}`);
  res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
  console.log(`request date: ${req.requestTime}`);
  res.send('Woof Woof!');
});

app.get('/secret', (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so U dont to talk to anyone');
});

// This will only run, because it's at the end of the app
// It will only run if we never sent back anything before.
app.use((req, res) => {
  res.status(404).send('NOT FOUND!');
});

app.listen(3000, () => {
  console.log('App is running on localhost:3000');
});
