const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`โโโ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);
  }
};
//
const findKeyByValue = (objiect, value) => {
  for (const key in objiect) {
    if (objiect[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
