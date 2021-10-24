// import _ from "lodash"
const _ = require("lodash");

const { text } = require("./a");

const r = _.sortedIndex([30, 50], 40);

console.log("What is the result:", r);
console.log("What is a:", text);
