let maximum = parseInt(prompt('Welcome! Enter your max number:'));

// user has to enter in a valid number
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

// user has already made their one guess at this point, so set 1.
let attemps = 1;

let guess = prompt("Enter your first guess!(Type 'q' to quit the game)");

while (parseInt(guess) !== targetNumber) {
  if (guess === 'q') break;
  guess = parseInt(guess);
  // user have made it into this loop means that users are guessing again.
  if (guess < targetNumber) {
    guess = prompt('Too Low: guess again!');
    attemps++;
  } else if (guess > targetNumber) {
    guess = prompt('Too High: guess again!');
    attemps++;
  } else {
    guess = prompt('Invalid guess. Please enter a number or "q" to quit');
  }
}

if (guess === 'q') {
  console.log('OK, YOU QUIT!');
} else {
  console.log('CONGRATS YOU WIN!');
  console.log(`You goy it! It tooke you ${attemps} guesses!`);
}
