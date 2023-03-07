const tail = function(arr) {
    return console.log(arr[arr.length - 1]);
}


const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      return console.log(`Assertion Failed ${actual} != ${expected}`);
    }
    return console.log(`Assertion Passed ${actual} === ${expected}`);
   
  };
  const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
