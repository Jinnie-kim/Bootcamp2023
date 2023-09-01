// function collectEggs() {
//   let totalEggs = 6; // internal variable (most common)
// }
// console.log(totalEggs);

// let totalEggs = 0; // global variable
// function collectEggs() {
//   totalEggs = 6;
// }
// console.log(totalEggs); // 0
// collectEggs();
// console.log(totalEggs); // 6

let bird = 'Scarlet Macaw';

function birdWatch() {
  // let bird = 'Great Blue Heron';
  console.log(bird);
}
birdWatch();
// console.log(bird);

// block level scope

let radius = 8;
if (radius > 0) {
  const PI = 3.141519;
  let msg = 'HIIII';
}

console.log(radius); // 8
console.log(PI); // undefined

// Lexical scope

function bankRobbery() {
  const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'BatWoman'];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}
