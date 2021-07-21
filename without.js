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
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
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
const words = ["hello", "world", "lighthouse"];
// loop thru arr1
function without(source, unwant) {
  const result = [];
  for (const element of words) {
    //check if arr2 includes elements in arr1
    if (!unwant.includes(element)) {
      //if false push
      result.push(element);
    }
  }
  return result;
}
let a = without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
const correctAnswer = ["hello", "world"];
//check if result === correct answer?
// console.log(a);
