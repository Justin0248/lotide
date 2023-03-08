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
  return mid;
};

console.log(middle([1]));
console.log(middle([2]));

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([0, 1, 2, 3]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));