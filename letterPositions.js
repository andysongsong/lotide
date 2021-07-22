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
//
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
//
const letterPositions = (string) => {
  const result = {};
  for (const index in string) {
    if (result[string[index]]) {
      result[string[index]].push(Number(index));
    } else if (!result[string[index]] && string[index] !== " ") {
      result[string[index]] = [Number(index)];
    }
  }
  return result;
};
assertArraysEqual(letterPositions("hello").e, [1]);
