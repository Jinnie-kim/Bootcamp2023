// const password = prompt('Enter your password');

// // AND 연산자는 short circuiting 단축 평가를 한다.
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//   console.log('VALID PASSWORD!');
// } else {
//   console.log('INCORRECT FORMAT FOR PASSWORD');
// }

// 0 - 5 free
// 5 - 10 p$10
// 10 - 65 $20
// 65+ free

const age = 1;

// if ((age >= 0 && age < 5) || age > 65) {
//   console.log('FREE');
// } else if (age >= 5 && age < 10) {
//   console.log('$10');
// } else if (age >= 10 && age < 65) {
//   console.log('$20');
// } else {
//   console.log('INVALID AGE!');
// }

if (!((age >= 0 && age < 5) || age >= 65)) {
  console.log('YOU ARE NOT A BABY OR A SENIOR');
}
