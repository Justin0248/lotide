const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed ${actual} != ${expected}`);
  }
  return console.log(`Assertion Passed ${actual} === ${expected}`);
   
};

const letterPositions = function(sentence) {
  const results = {};
  let arr = [];
  const isArray = Array.isArray(sentence);
  if (!isArray) {
    arr.push(sentence);
  }
  for (let i = 0; i < sentence.length; i++) {
    if (results[arr[i]]) {
      results[arr[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};