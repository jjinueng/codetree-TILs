const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

console.log(Number(input[0]), Number(input[1]));