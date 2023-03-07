const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed ${actual} != ${expected}`);
  }
  return console.log(`Assertion Passed ${actual} === ${expected}`);
 
};
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('no', 'no');
assertEqual(1, 2);