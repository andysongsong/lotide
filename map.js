const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

//assertfunction
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Assertion Passed: ", arr1, "===", arr2);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", arr1, "!==", arr2);
  }
};
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
