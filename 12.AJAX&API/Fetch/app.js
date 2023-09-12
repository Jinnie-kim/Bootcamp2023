// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log('RESOLVED', res);
//     // also return promise
//     return res.json();
//   })
//   .then((data) => console.log('JSON done', data))
//   .catch((e) => {
//     console.log('Error', e);
//   });

// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     console.log('RESOLVED', res);
//     // also return promise
//     return res.json();
//   })
//   .then((data) => {
//     console.log('JSON done', data);
//     return fetch('https://swapi.dev/api/people/2/');
//   })
//   .then((res) => {
//     console.log('second', res);
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log('Error', e);
//   });

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(data);
    const res2 = await fetch('https://swapi.dev/api/people/2/');
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log('ERROR!!!!!', e);
  }
};

loadStarWarsPeople();
