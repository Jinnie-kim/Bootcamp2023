const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const ul = document.querySelector('#cats');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const catName = input.value;
  const li = document.createElement('li');
  li.innerText = catName;
  ul.appendChild(li);
  input.value = '';
});
