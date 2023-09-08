const player1Score = document.querySelector('#player1-score');
const player2Score = document.querySelector('#player2-score');
const setSelect = document.querySelector('#set-select');
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

let winningScore;

let player1ScoreNumber = 0;
let player2ScoreNumber = 0;

setSelect.addEventListener('change', function () {
  winningScore = Number(setSelect.value);
});

player1Button.addEventListener('click', function () {
  player1ScoreNumber += 1;
  player1Score.textContent = player1ScoreNumber;
});

player2Button.addEventListener('click', function () {
  player2ScoreNumber += 1;
  player2Score.textContent = player2ScoreNumber;
});

// if (Number(player1Score.textContent) + Number(player2Score.textContent) === setNumber) {
//   player1Button.disabled = true;
//   player2Button.disabled = true;

//   if (Number(player1Score.textContent) > Number(player2Score.textContent)) {
//     player1Score.style.color = 'green';
//     player2Score.style.color = 'red';
//   } else {
//     player1Score.style.color = 'red';
//     player2Score.style.color = 'green';
//   }
// }

resetButton.addEventListener('click', function () {
  player1Button.disabled = false;
  player2Button.disabled = false;

  player1Score.style.color = 'black';
  player2Score.style.color = 'black';

  player1Score.textContent = 0;
  player2Score.textContent = 0;
});
