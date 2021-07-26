//
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
//
function middle(array) {
  let a = [];
  if (array.length <= 2) {
    return a;
  }
  if (array.length % 2 !== 0) {
    const index = Math.floor(array.length / 2);
    const element = array[index];
    a.push(element);
    return a;
  }
  const index = array.length / 2;
  const element1 = array[index];
  const element2 = array[index - 1];
  a.push(element2);
  a.push(element1);
  return a;
}
//middle([1, 2, 3, 4, 5, 6]);
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
module.exports = middle;
