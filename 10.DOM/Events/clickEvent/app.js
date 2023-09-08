const btn = document.querySelector('#v2');
const h1 = document.querySelector('h1');

// 2nd way to make click event : onClick
h1.onclick = function () {
  alert('you clicked the h1');
};

btn.onclick = function () {
  console.log('YOU CLICKED ME!!');
  console.log('I HOPE IT WORKED!!!');
};

function scream() {
  console.log('AAAAAAAHHHHH');
  console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

// 3rd way to make click event: addEventListener

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () => {
  alert('CLICKED!!!!');
});
