// let die1 = Math.floor(Math.random() * 6) + 1;
let die1 = rollDie(12);

function rollDie(side) {
  return Math.floor(Math.random() * side) + 1;
}

function sing() {
  console.log('DO');
  console.log('RE');
  console.log('MI');
}

sing();

function repeat(string, times) {
  let printStr = '';
  for (let i = 1; i <= times; i++) {
    printStr += string;
  }
  console.log(printStr);
}

repeat('hi', 3);
