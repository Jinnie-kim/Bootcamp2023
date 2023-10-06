// will run this file on its own separately from our node app
// anytime we want to seed our databse.
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

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

// const sample = (array) => array[Math.floor(Math.random * array.length)];
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://random.imagecdn.app/500/150',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, amet. Beatae odio perspiciatis iusto eum nostrum, deserunt, sit deleniti ut enim et natus maiores animi, laboriosam vel molestias libero? Debitis.',
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
