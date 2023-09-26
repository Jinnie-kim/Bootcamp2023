const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

main().catch((err) => {
  console.log('Oh no Mongo connection error!');
  console.log(err);
});

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
  console.log('MONGO CONNECTION OPEN!!!');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Woof!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
