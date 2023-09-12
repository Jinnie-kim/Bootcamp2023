// function declaration
async function hello() {}

// arrow function
const sing = async () => {
  return 'lalalala';
};

sing().then((data) => {
  console.log('PROMISE RESOLVED WITH:', data);
});

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgifeetarecute') return 'WELCOME';
  throw 'Invalid Password';
};

login('sfsdf', 'corgifeetarecute')
  .then((msg) => {
    console.log('LOGGED IN');
    console.log(msg);
  })
  .catch((err) => {
    console.log('ERROR');
    console.log(err);
  });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000));

async function rainbow() {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('pruple', 1000);
  return 'All Done ';
}

// rainbow().then(() => console.log('END OF the Rainbow'));

// same with right above function
async function printRainbow() {
  await rainbow();
  console.log('END OF the Rainbow');
}

printRainbow();
