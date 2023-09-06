// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const pokemonArea = document.querySelector('#pockemon-area');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 100; i++) {
  const pokemonBall = document.createElement('div');
  const pokemonImg = document.createElement('img');
  const pokemonNumber = document.createElement('span');
  pokemonNumber.innerText = `#${i}`;
  pokemonBall.classList.add('pokemon');
  pokemonBall.appendChild(pokemonImg);
  pokemonBall.appendChild(pokemonNumber);

  pokemonImg.src = `${baseUrl}${i}.png`;

  pokemonArea.appendChild(pokemonBall);
}
