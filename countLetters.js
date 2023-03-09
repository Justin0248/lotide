const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed ${actual} != ${expected}`);
  }
  return console.log(`Assertion Passed ${actual} === ${expected}`);
   
};

const countLetters = function(sentence) {
  let count = {};
  for (letters of sentence) {
    if (count[letters]) {
      count[letters] += 1;
    } else {
      count[letters] = 1;
    }
  }
  delete count[' '];
  return count;
};

console.log(countLetters('hello my name is Justin'));

