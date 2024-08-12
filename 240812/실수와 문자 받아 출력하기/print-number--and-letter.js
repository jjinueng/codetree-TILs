const fs = require("fs");
let a = fs.readFileSync(0).toString().split("\n");

console.log(a[0]);
console.log(Number(a[1]).toFixed(2));
console.log(Number(a[2]).toFixed(2));