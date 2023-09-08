const colorButton = document.querySelector('#color-button');
const colorCode = document.querySelector('#color-code');
const palette = document.querySelector('#color-palette');

let rCode = Math.floor(Math.random() * 256);
let gCode = Math.floor(Math.random() * 256);
let bCode = Math.floor(Math.random() * 256);

function createRandomColor() {
  let rCode = Math.floor(Math.random() * 256);
  let gCode = Math.floor(Math.random() * 256);
  let bCode = Math.floor(Math.random() * 256);

  palette.style.backgroundColor = `rgb(${rCode},${gCode},${bCode})`;
  colorCode.textContent = `rgb(${rCode},${gCode},${bCode})`;
}

createRandomColor();

colorButton.addEventListener('click', createRandomColor);
