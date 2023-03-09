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
      console.log(shirt1[i][v]);
      console.log(shirt2[i][v]);
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
    
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject));
    
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject));
    
    
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));
    
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));