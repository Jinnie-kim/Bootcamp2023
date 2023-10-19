const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12); // generate salt
//   const hashedPassword = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hashedPassword); // this result is going to be store in to DB
// };

// You can do this like all at once.
const hashPassword = async (pw) => {
  const hashedPassword = await bcrypt.hash(pw, 12); // generate salt
  console.log(hashedPassword); // this result is going to be store in to DB
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('Logged you in successful match');
  } else {
    console.log('incorrect');
  }
};

// hashPassword('monkey');

login('monkey', '$2b$12$OdV.I0aj.bJ8sJANgXrm0elOdamThnBgABf7trL8ZEA4CaArGADua');
