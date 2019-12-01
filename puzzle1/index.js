const fs = require('fs');

const file = fs.readFileSync('./input.txt').toString();

const numberArray = file.split('\n');



const fuelRequired = (array) => {
  let sum = 0;
  for (const item of array) {
    const num = parseInt(item);
    const fuelNeeded = Math.floor(num/3) - 2;

    if (fuelNeeded > 0) {
      sum += fuelNeeded + fuelRequired([fuelNeeded]);
    }
    
  }
  return sum;
};


console.log(fuelRequired(numberArray));

