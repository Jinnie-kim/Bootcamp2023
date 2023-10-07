const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

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

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  // res.send('sorry you need a password');
  // res.status(401);
  throw new AppError(401, 'Password required!');
};

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

app.get('/error', (req, res) => {
  chicken.fly();
});

app.get('/dogs', (req, res) => {
  console.log(`request date: ${req.requestTime}`);
  res.send('Woof Woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone');
});

app.get('/admin', (req, res) => {
  throw new AppError(403, 'You are not an Admin');
});

// This will only run, because it's at the end of the app
// It will only run if we never sent back anything before.
app.use((req, res) => {
  res.status(404).send('NOT FOUND!');
});

// app.use((err, req, res, next) => {
//   console.log('**********************************************');
//   console.log('*****************ERROR*******************');
//   console.log('**********************************************');
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('App is running on localhost:3000');
});
