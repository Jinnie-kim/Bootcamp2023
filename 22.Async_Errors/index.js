const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');
const AppError = require('./AppError');

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

app.get('/products', async (req, res, next) => {
  try {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render('products/index', { products, category });
    } else {
      // await some mongoose operation
      const products = await Product.find({});
      res.render('products/index', { products, category: 'All' });
    }
  } catch (e) {
    next(e);
  }
});

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
});

app.post('/products', async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
  } catch (e) {
    next(e);
  }
});

app.get('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError(404, 'Product Not Found!');
    }
    res.render('products/show', { product });
  } catch (e) {
    next(e);
  }
});

app.get('/products/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError(404, 'Product Not Found!');
    }
    res.render('products/edit', { product, categories });
  } catch (e) {
    next(e);
  }
});

app.put('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
  } catch (e) {
    next(e);
  }
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/products');
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
