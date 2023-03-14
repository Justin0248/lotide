const findKeyByValue = function(result, value) {
  for (const type in result) {
    if (result[type]) {
      if (value === result[type]) {
        return type;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue;