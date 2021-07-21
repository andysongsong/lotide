const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
function eqArrays(arr1, arr2) {
  for (let num1 of arr1) {
    for (let num2 of arr2) {
      if (num1 === num2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
