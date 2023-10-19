const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');

// connect to mongo(mongoose)
async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/authDemo');
  console.log('MONGO CONNECTION OPEN!!!');
}

main().catch((err) => {
  console.log('Oh no Mongo connection error!');
  console.log(err);
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is the hompage');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect('/');
});

app.get('/secret', (req, res) => {
  res.send("This is secret you cannot see me unless you're logged in");
});

app.listen(3000, () => {
  console.log('Serving your app');
});
