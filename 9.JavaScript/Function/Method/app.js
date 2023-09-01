const myMath = {
  PI: 3.141519,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

// this

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log('This is:', this);
    console.log(`${this.name} says MEOW`);
  },
};

const meow2 = cat.meow;
