const countLetters = function(sentence) {
  let count = {};
  for (letters of sentence) {
    if (count[letters]) {
      count[letters] += 1;
    } else {
      count[letters] = 1;
    }
  }
  delete count[' '];
  return count;
};

module.exports = countLetters;