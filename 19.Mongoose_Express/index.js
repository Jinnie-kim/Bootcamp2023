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

// We don't have access to request body immediately(if we try, we get undefined, it's not going to be parsed)
// tell express to use that middleware.
app.use(express.urlencoded({ extended: true }));

app.get('/products', async (req, res) => {
  // await some mongoose operation
  const products = await Product.find({});
  res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product });
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
