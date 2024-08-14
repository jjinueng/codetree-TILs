const fs = require("fs");
let n = fs.readFileSync(0).toString().split(" ").map(Number);

let extent = n ** 2;

console.log(extent);

if (n < 5) {
    console.log("tiny");
}