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

app.listen(3000, () => {
  console.log('App is running on localhost:3000');
});
