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
