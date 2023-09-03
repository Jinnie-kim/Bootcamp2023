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
