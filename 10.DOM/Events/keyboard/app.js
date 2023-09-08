const button = document.querySelector('button');

button.addEventListener('click', function (event) {
  console.log(event);
  // alert('click!');
});

const input = document.querySelector('input');
input.addEventListener('keydown', function (event) {
  console.log(event.key);
  console.log(event.code);
});
// input.addEventListener('keyup', function () {
//   console.log('KEY UP');
// });

window.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('DOWN!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!');
      break;
    default:
      console.log('IGNORED!');
  }
});
