// setTimeout(() => {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'yellow';
//     }, 1000);
//   }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};

delayedColorChange('red', 1000, () => {
  console.log('inside callback!');
});
