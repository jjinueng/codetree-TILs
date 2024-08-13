const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

console.log(a+8);
console.log(b*3);
console.log((a+8)*(b*3));