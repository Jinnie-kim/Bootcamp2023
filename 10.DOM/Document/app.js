// const allImgs = document.getElementsByTagName('img');

// for (let img of allImgs) {
//   img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
  link.style.color = 'rgb(0,108,134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}
