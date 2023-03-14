const assertEqual = require('./assertEqual');
  const eqArrays = function(test, outcome){
    let check = true;
    for (let i = 0; i < test.length; i++){
            if (test[i] !== outcome[i]){
check = false
        }
    }
    return check;
  }

  module.exports = eqArrays;