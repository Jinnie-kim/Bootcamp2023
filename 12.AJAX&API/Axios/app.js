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

getStarWarsPerson(1);
getStarWarsPerson(2);
