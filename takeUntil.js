const takeUntil = function(array, callback) {
  const arr = [];
  let num;
  num = array.filter(callback);
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
    if (arr[i] == array.filter(callback)) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;

};
    
module.exports = takeUntil;