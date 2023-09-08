const colorButton = document.querySelector('#color-button');
const colorCode = document.querySelector('#color-code');

function createRandomColor() {
  let rCode = Math.floor(Math.random() * 256);
  let gCode = Math.floor(Math.random() * 256);
  let bCode = Math.floor(Math.random() * 256);

  if (rCode + gCode + bCode < 300) {
    colorCode.style.color = 'white';
  } else {
    colorCode.style.color = 'black';
  }

  return `rgb(${rCode},${gCode},${bCode})`;
}

function changeRandomColor() {
  const newColor = createRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}

colorButton.addEventListener('click', changeRandomColor);
