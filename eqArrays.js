const assertEqual = function(actual, expected) {
    if (actual !== expected) {
      return console.log(`Assertion Failed ${actual} != ${expected}`);
    }
    return console.log(`Assertion Passed ${actual} === ${expected}`);
   
  };

  const eqArrays = function(test, outcome){
    let check = true;
    for (let i = 0; i < test.length; i++){
            if (test[i] !== outcome[i]){
check = false
        }
    }
    return check;
  }
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);