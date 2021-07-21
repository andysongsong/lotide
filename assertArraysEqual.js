/// TEST CODE
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
assertArraysEqual(["1", "2", 4], ["1", "2", 3]);
