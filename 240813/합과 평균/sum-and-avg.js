const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

let c = ((a + b) / 2).toFixed(1);

console.log(a + b, c);