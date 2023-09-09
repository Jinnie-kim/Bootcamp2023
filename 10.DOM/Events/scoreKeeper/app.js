const player1Score = document.querySelector('#player1-score');
const player2Score = document.querySelector('#player2-score');
const setSelect = document.querySelector('#set-select');
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

let winningScore;
let player1ScoreNumber = 0;
let player2ScoreNumber = 0;
let isGameOver = false;

setSelect.addEventListener('change', function () {
  winningScore = Number(setSelect.value);
});

player1Button.addEventListener('click', function () {
  if (!isGameOver) {
    player1ScoreNumber += 1;
    if (player1ScoreNumber === winningScore) {
      isGameOver = true;
      player1Button.disabled = true;
      player2Button.disabled = true;
      player1Score.classList.add('success');
      player2Score.classList.add('lose');
    }
    player1Score.textContent = player1ScoreNumber;
  }
});

player2Button.addEventListener('click', function () {
  if (!isGameOver) {
    player2ScoreNumber += 1;
    if (player2ScoreNumber === winningScore) {
      isGameOver = true;
      player1Button.disabled = true;
      player2Button.disabled = true;
      player2Score.classList.add('success');
      player1Score.classList.add('lose');
    }
    player2Score.textContent = player2ScoreNumber;
  }
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  player1Button.disabled = false;
  player2Button.disabled = false;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1ScoreNumber = 0;
  player2ScoreNumber = 0;
  player2Score.classList.remove('success', 'lose');
  player1Score.classList.remove('success', 'lose');
  setSelect.value = '';
}
