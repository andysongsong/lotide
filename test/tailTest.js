const tail = require("../tail");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(eqArrays(tail(words), ["Lighthouse", "Labs"]), true);
