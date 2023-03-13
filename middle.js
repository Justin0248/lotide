const middle = function(array) {
  let mid = [];
  let  number;
  if (array[array.length - 1] === 1 || array[array.length - 1] === 2) {
    return mid;
  }
  if (array.length % 2 === 0) {
    number = (array.length / 2);
    mid.push(array[number - 1]);
    mid.push(array[number]);
  }
  if ((array.length % 2) !== 0) {
    number = ((array.length - 1) / 2);
    mid.push(array[number]);
  }
  return mid.toString();
};

const assertEqual = require('./assertEqual.js');
assertEqual(middle([4,6,2,7]), '6,2');
assertEqual(middle([2,4,6]), '4');