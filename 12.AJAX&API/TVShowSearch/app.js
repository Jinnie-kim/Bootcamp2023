const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
const button = document.querySelector('button');

const movieTitle = document.querySelector('#movie-title');
const movieImage = document.querySelector('#movie-image');

// title 입력받기
// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   console.log(form.elements.query.value);
//   const searchTitle = input.value;
//   const data = await getMovieInfo(searchTitle);

//   const title = data.name;

//   movieTitle.textContent = title;
//   movieImage.src = data.image.medium;
// });

// const getMovieInfo = async (title) => {
//   const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${title}`);

//   return res.data[0].show;
// };

// Lecture version
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

  makeImages(res.data);
  form.elements.query.value = '';
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
