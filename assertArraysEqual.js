const eqArrays = function(test, outcome){
    let check = true;
     for (let i = 0; i < test.length; i++){
             if (test[i] !== outcome[i]){
 check = false
         }
     }
     return check;
   }
   const assertEqual = require('./assertEqual');
   assertEqual(eqArrays([0, 2, 3], [0, 2, 3]),true);
   assertEqual(eqArrays([1, 2, 4],[2, 5, 7]), false);