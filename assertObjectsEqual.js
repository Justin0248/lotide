const eqObjects = function(object1, object2) {
  let shirt1 = [];
  let shirt2 = [];
  let truth;
  for (const key in object1) {
    shirt1.push(object1[key]);
  }
  for (const keys in object2) {
    shirt2.push(object2[keys]);
  }
  shirt1.sort();
  shirt2.sort();
  if (shirt1.length !== shirt2.length) {
    return false;
  }
  for (let i = 0; i < shirt1.length; i++) {
    for (let v = 0; v < shirt1.length; v++) {
      if (shirt1[i][v] !== shirt2[i][v]) {
        truth = false;
        break;
      } else if (shirt1[i][v] === shirt2[i][v]) {
        truth = true;
                 
      }
    }
  }
  return truth;
};

module.exports = eqObjects;