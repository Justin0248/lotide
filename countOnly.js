const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      return console.log(`Assertion Failed ${actual} != ${expected}`);
    }
    return console.log(`Assertion Passed ${actual} === ${expected}`);
   
  };
const countOnly = function(allItems, itemsToCount) {
const result = {

};

for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]){
    if (result[item]){
        result[item] += 1;
    }
    else {
        result[item] = 1
    }
}
}
return result;
}

module.exports = countOnly;