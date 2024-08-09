const fs = require("fs");

let a = fs.readFileSync(0).toString();
a = (Number(a)*30.48).toFixed(1);

console.log(a)