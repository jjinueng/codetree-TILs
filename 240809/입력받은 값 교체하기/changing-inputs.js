const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ");

let temp = b;
b = a;
a = temp;

console.log(Number(a), Number(b));