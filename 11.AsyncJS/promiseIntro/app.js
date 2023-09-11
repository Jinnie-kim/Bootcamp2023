// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout :(');
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout :(');
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// // Callback hell
// fakeRequestCallback(
//   'books.com/page1',
//   function (response) {
//     console.log('IT WORKED!!!');
//     console.log(response);
//     fakeRequestCallback(
//       'books.com/page2',
//       function (response) {
//         console.log('IT WORKED AGAIN!!!');
//         console.log(response);
//         fakeRequestCallback(
//           'books.com/page3',
//           function (response) {
//             console.log('IT WORKED AGAIN!!!(3rd req)');
//             console.log(response);
//           },
//           function (error) {
//             console.log('error(3rd req)', error);
//           }
//         );
//       },
//       function (error) {
//         console.log('error(2nd req)', error);
//       }
//     );
//   },
//   function (error) {
//     console.log('ERROR!!!', error);
//   }
// );

// Promise
// fakeRequestPromise('yell.com/api/coffe/page1')
//   // Only this will run if the promise is resovled.
//   .then(() => {
//     console.log('It Worked!!!!(page1)');
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//       .then(() => {
//         console.log('It Worked!!!!(page2)');
//         fakeRequestPromise('yelp.com/coffee/page3')
//           .then(() => {
//             console.log('It Worked!!!!(page3)');
//           })
//           .catch(() => {
//             console.log('OH, NO ERROR !!!(page3)');
//           });
//       })
//       .catch(() => {
//         console.log('OH, NO ERROR !!!(page2)');
//       });
//   })
//   // Only this will run if the promise is rejected.
//   .catch(() => {
//     console.log('OH, NO ERROR !!!(page1)');
//   });

fakeRequestPromise('yell.com/api/coffe/page1')
  .then((data) => {
    console.log('It Worked!!!!(page1)');
    console.log(data);
    return fakeRequestPromise('yelp.com/api/coffee/page2');
  })
  .then(() => {
    console.log('It Wo         rked!!!!(page2)');
    return fakeRequestPromise('yelp.com/api/coffee/page3');
  })
  .then(() => {
    console.log('It Worked!!!!(page3)');
  })
  .catch(() => {
    console.log('OH NO, A REQUEST FAILED!');
  });
