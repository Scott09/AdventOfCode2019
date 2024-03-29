const fs = require('fs');

const file = fs.readFileSync('./input.txt').toString();

// console.log(typeof file);


const numArray = file.split(',');

for (let item of numArray) {
  item = parseInt(item);
}

const parsedArray = numArray.map((x) => {
  return parseInt(x, 10);
});


const testArray = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,10,23,27,2,27,13,31,1,31,6,35,2,6,35,39,1,39,5,43,1,6,43,47,2,6,47,51,1,51,5,55,2,55,9,59,1,6,59,63,1,9,63,67,1,67,10,71,2,9,71,75,1,6,75,79,1,5,79,83,2,83,10,87,1,87,5,91,1,91,9,95,1,6,95,99,2,99,10,103,1,103,5,107,2,107,6,111,1,111,5,115,1,9,115,119,2,119,10,123,1,6,123,127,2,13,127,131,1,131,6,135,1,135,10,139,1,13,139,143,1,143,13,147,1,5,147,151,1,151,2,155,1,155,5,0,99,2,0,14,0];



// Part 1
const processOpCode = (array) => {
  
  for (let i = 0; i < array.length; i+=4) {
    if (array[i] === 99) {
      break;
    } else if (array[i] === 1) {
      const sum = array[array[i+1]] + array[array[i+2]];
      array[array[i+3]] = sum;
    } else if (array[i] === 2) {
      const product = array[array[i+1]] * array[array[i+2]];
      array[array[i+3]] = product;
    }
  }
  return array;
}


// PART 2

const processOpCodePartTwo = (targetValue) => {
    for (let noun = 0; noun <= 100 ; noun++) {
      for (let verb = 0; verb <= 100 ; verb++) {
        const array = [1,noun,verb,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,6,19,23,1,10,23,27,2,27,13,31,1,31,6,35,2,6,35,39,1,39,5,43,1,6,43,47,2,6,47,51,1,51,5,55,2,55,9,59,1,6,59,63,1,9,63,67,1,67,10,71,2,9,71,75,1,6,75,79,1,5,79,83,2,83,10,87,1,87,5,91,1,91,9,95,1,6,95,99,2,99,10,103,1,103,5,107,2,107,6,111,1,111,5,115,1,9,115,119,2,119,10,123,1,6,123,127,2,13,127,131,1,131,6,135,1,135,10,139,1,13,139,143,1,143,13,147,1,5,147,151,1,151,2,155,1,155,5,0,99,2,0,14,0];
        array[1] = noun;
        array[2] = verb;
        for (let i = 0; i < array.length; i+=4) {
          array[1] = noun;
          array[2] = verb;
          if (array[i] === 99) {
            break;
          } else if (array[i] === 1) {
            const sum = array[array[i+1]] + array[array[i+2]];
            array[array[i+3]] = sum;
          } else if (array[i] === 2) {
            const product = array[array[i+1]] * array[array[i+2]];
            array[array[i+3]] = product;
          }
        }
        if (array[0] === targetValue) {
          return (100 * noun + verb);
        }
      }
    }
    return false;
}

console.log(processOpCodePartTwo(19690720));


console.log(processOpCode(parsedArray));



fs.writeFileSync('output.txt', JSON.stringify(processOpCode(parsedArray)));

fs.writeFileSync('test.txt', JSON.stringify(processOpCode(testArray)));
