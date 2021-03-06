const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`โโโ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const result = {};
  for (const letter of string) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("LHL"));
