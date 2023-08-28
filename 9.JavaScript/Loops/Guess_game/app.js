let userGuessNumber = prompt('Welcome! Enter your max number:');

const guessNumber = Math.floor(Math.random() * 20) + 1;

let tryTimes = 0;

console.log(guessNumber);

while (userGuessNumber !== guessNumber) {
  if (userGuessNumber < guessNumber) {
    userGuessNumber = prompt('Too Low. Guess Again');
    tryTimes++;
  } else if (userGuessNumber > guessNumber) {
    userGuessNumber = prompt('Too High. Guess Again');
    tryTimes++;
  } else if (userGuessNumber === 'q') {
    break;
  }
}

console.log(`It took you ${tryTimes} guesses`);
