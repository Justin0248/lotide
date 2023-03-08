const eqArrays = function(test, outcome){
    let check = true;
     for (let i = 0; i < test.length; i++){
             if (test[i] !== outcome[i]){
 check = false
         }
     }
     return check;
   }
   const assertArraysEqual = function(output) {
     if (output === true){
        return console.log('Assertion passed');
     }
     if (output === false){
        return console.log('Assertion failed');
     }
 }
    