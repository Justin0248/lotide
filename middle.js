const middle = function(array) {
  let mid = [];
  let  number;
  if (array.length === 1 || array.length === 2) {
    return mid.toString();
  }
 else if (array.length % 2 === 0 && array.length > 2) {
    number = (array.length / 2);
    mid.push(array[number - 1]);
    mid.push(array[number]);
    return mid.toString();
  }
 else if ((array.length % 2) !== 0 && array.length > 1) {
    number = ((array.length - 1) / 2);
    mid.push(array[number]);
    return mid.toString();
  }

};
module.exports = middle;