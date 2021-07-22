const countLetters = (string) => {
  const result = {};
  for (const index in string) {
    if (result[string[index]]) {
      result[string[index]].push(index);
    } else if (!result[string[index]] && string[index] !== " ") {
      result[string[index]] = [index];
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));
