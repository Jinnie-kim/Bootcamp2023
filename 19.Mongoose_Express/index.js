const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');

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
// overriding method
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy', 'fungai'];

app.get('/products', async (req, res) => {
  // await some mongoose operation
  const products = await Product.find({});
  res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
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

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
  res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
