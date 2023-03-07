const head = function(arr) {
return console.log(arr[0]);
}



const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      return console.log(`Assertion Failed ${actual} != ${expected}`);
    }
    return console.log(`Assertion Passed ${actual} === ${expected}`);
   
  };
  assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

  assertEqual('Lighthouse Labs', 'Bootcamp');
  assertEqual(1, 1);
  assertEqual('no', 'no');
  assertEqual(1, 2);