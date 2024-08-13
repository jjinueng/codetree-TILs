const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().split(" ").map(Number);

let sum = a + b + c;
let avg = ((a + b + c) / 3).toFixed(0);

console.log(sum);
console.log(avg);