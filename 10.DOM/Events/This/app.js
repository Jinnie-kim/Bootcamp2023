function createRandomColor() {
  let rCode = Math.floor(Math.random() * 256);
  let gCode = Math.floor(Math.random() * 256);
  let bCode = Math.floor(Math.random() * 256);

  return `rgb(${rCode},${gCode},${bCode})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
  h1.addEventListener('click', colorize);
}

function colorize() {
  this.style.backgroundColor = createRandomColor();
  this.style.color = createRandomColor();
}
