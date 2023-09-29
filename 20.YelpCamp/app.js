const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

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

// mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
//   useNewUrlParse: true,
//   useCreatIndex: true,
//   useUnifiedTopology: true,
// });

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/makecampground', async (req, res) => {
  const camp = new Campground({ title: 'My Backyard', description: 'cheap camping!' });
  await camp.save();
  res.send(camp);
});

app.listen(3000, (req, res) => {
  console.log('Serving on port 3000');
});
