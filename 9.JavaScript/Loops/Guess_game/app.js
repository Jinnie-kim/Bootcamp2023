let maximum = parseInt(prompt('Welcome! Enter your max number:'));

// user has to enter in a valid number
while (!maximum) {
  maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;

let attemps = 1;

let guess = parseInt(prompt('Enter your first guess!'));

while (parseInt(guess) !== targetNumber) {
  if (guess === 'q') break;
  // user have made it into this loop means that users are guessing again.
  attemps++;
  if (guess < targetNumber) {
    guess = prompt('Too Low: guess again!');
  } else if (guess > targetNumber) {
    guess = prompt('Too High: guess again!');
  }
}

if (guess === 'q') {
  console.log('OK, YOU QUIT!');
} else {
  console.log('CONGRATS YOU WIN!');
  console.log(`You goy it! It tooke you ${attemps} guesses!`);
}
