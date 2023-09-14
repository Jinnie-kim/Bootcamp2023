// axios
//   .get('https:swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log('Response:', res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https:swapi.dev/api/people/${id}/`);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

const jokeList = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);

    return res.data.joke;
  } catch (e) {
    return 'NO JOKES AVAILABLE! SORRY';
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const li = document.createElement('li');
  li.innerText = jokeText;

  jokeList.appendChild(li);
};

button.addEventListener('click', addNewJoke);
