const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

main().catch((err) => console.log(err));

async function main() {
  mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
  console.log('CONNECTION OPEN!!!');
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model('Movie', movieSchema); // make a Model called 'Movie'
// const rwb = new Movie({ title: 'Red, White and Royal Blue', year: 2023, score: 9.5, rating: 'R' });

// Movie.insertMany([
//   { title: 'Barbie', year: 2023, score: 7.1, rating: 'PG-13' },
//   { title: "Harry Ptter and the Philosophers's Stone", year: 2001, score: 7.6, rating: 'PG' },
//   { title: 'Red, White and Royal Blue', year: 2023, score: 9.5, rating: 'R' },
//   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
// ]).then((data) => {
//   console.log('it worked');
//   console.log(data);
// });
