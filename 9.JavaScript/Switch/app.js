const day = 6;

// if (day === 1) {
//   console.log('Monday');
// } else if (day === 2) {
//   console.log('Tuesday');
// } else if (day === 3) {
//   console.log('Wednesday');
// } else if (day === 4) {
//   console.log('Thursday');
// } else if (day === 5) {
//   console.log('Friday');
// } else {
//   console.log('I DONT KNOW THAT!');
// }

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('WEEKEND!');
    break;
  default:
    console.log('I DONT KNOW THAT!');
    break;
}
