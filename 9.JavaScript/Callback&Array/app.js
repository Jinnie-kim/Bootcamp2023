// ForEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function print(element) {
  console.log(element);
}

numbers.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// easier to read, write shorter
for (let el of numbers) {
  console.log(el);
}

const movies = [
  { title: 'Amadeus', score: 99 },
  { title: 'Stand By Me', score: 85 },
  { title: 'Parasite', score: 95 },
  { title: 'Alien', score: 90 },
];

movies.forEach((movie) => {
  console.log(`${movie.title} - ${movie.score}/100`);
});

// Map
const times = numbers.map((number) => number * 2);

const movieTitle = movies.map((movie) => movie.title);

console.log(movieTitle);
console.log(times);

// setTimeout & setInterval

console.log('Hello!!!!');
setTimeout(() => {
  console.log('...are you still there?');
}, 3000);

console.log('GGOODBYE~');

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// clearInterval(id);

// Filter

numbers.filter((n) => n === 4);

// Some & Every

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

const isAllPassed = exams.every((score) => score > 75);

const isSomePassed = exams.some((score) => score > 80);

// Reduce

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;

// for (let price of prices) {
//   total += price;
// }

const total = prices.reduce((total, price) => {
  return total + price;
});

const minPrice = prices.reduce((min, price) => {
  return min < price ? min : price;
});

// Arrow function & this
