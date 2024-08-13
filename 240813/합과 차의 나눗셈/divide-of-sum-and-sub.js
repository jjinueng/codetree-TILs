const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

let c = ((a + b) / (a - b)).toFixed(2);

console.log(c);