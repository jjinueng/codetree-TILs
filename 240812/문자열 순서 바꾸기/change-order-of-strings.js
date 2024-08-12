const fs = require("fs");
let [t, s] = fs.readFileSync(0).toString().split("\n");

let temp = t;
t = s;
s = temp;

console.log(t);
console.log(s);