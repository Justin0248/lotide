const map = function(array, callback) {
const results = [];
for (let item of array) {
    console.log(`item BEFORE: ${item}`);
    console.log(`item AFTER: ${callback(item)}`);
    console.log(`---`);
}
return results
}

module.exports = map;