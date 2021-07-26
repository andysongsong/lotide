const tail = require("../tail");
const assertEqual = require("../assertEqual");
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual((tail(words), ["Lighthouse", "Labs"]));
