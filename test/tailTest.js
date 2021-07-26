const tail = require("../tail");
const assert = require("chai").assert;
// const eqArrays = require("../eqArrays");
// const assertEqual = require("../assertEqual");
// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(eqArrays(tail(words), ["Lighthouse", "Labs"]), true);
describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
