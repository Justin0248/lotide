const eqArrays = function(test, outcome){
    let check = true;
     for (let i = 0; i < test.length; i++){
             if (test[i] !== outcome[i]){
 check = false
         }
     }
     return check;
   }
   const assertArraysEqual = function(input, output) {
    const truth = eqArrays(input, output);
     if (truth === true){
        return console.log('Assertion passed');
     }
     if (truth === false){
        return console.log('Assertion failed');
     }
 }
    module.exports = assertArraysEqual;