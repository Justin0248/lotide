const tail = function(arr) {
    return (arr[arr.length - 1]);
}
const assertEqual = require('./assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), 'Labs');
