const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed ${actual} != ${expected}`);
  }
  return console.log(`Assertion Passed ${actual} === ${expected}`);
     
};

const findKeyByValue = function(result, value) {
  for (const type in result) {
    if (result[type]) {
      if (value === result[type]) {
        return type;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
console.log(findKeyByValue(bestTVShowsByGenre, 'Breaking Bad'));