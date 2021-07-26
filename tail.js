const assertEqual = require("./assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
function tail(arr) {
  return arr.slice(1);
}
const words = ["Yo Yo", "Lighthouse", "Labs"];

// TEST CODE
module.exports = tail;
