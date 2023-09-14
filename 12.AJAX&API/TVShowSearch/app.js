const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

const movieTitle = document.querySelector('#movie-title');
const movieImage = document.querySelector('#movie-image');

// title 입력받기
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTitle = input.value;
  const data = await getMovieInfo(searchTitle);

  const title = data.name;

  movieTitle.textContent = title;
  movieImage.src = data.image.medium;
});

const getMovieInfo = async (title) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${title}`);

  return res.data[0].show;
};
