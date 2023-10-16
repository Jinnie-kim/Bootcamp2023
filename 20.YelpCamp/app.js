const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const { campgroundSchema, reviewSchema } = require('./schemas');
const catchAsync = require('./utilis/catchAsyncs');
const ExpressError = require('./utilis/ExpressError');
const methodOverride = require('method-override');
const Campground = require('./models/campground');
const Review = require('./models/review');

const campgroundsRoutes = require('./routes/campground');

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
  console.log('MONGO CONNECTION OPEN!!!');
}

main().catch((err) => {
  console.log('Oh no Mongo connection error!');
  console.log(err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

app.use('/campgrounds', campgroundsRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.post(
  '/campgrounds/:id/reviews',
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground.id}`);
  })
);

app.delete(
  '/campgrounds/:id/reviews/:reviewId',
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/campgrounds/${id}`);
  })
);
app.all('*', (req, res, next) => {
  next(new ExpressError('Page not Found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh no, something went wrong!';
  res.status(statusCode).render('error', { err });
});

app.listen(3000, (req, res) => {
  console.log('Serving on port 3000');
});
