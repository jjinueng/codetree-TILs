const fs = require("fs");
let [h, w] = fs.readFileSync(0).toString().split(" ").map(Number);

let b = Math.floor((10000 * w) / (h ** 2));

console.log(b);

if (b > 25) {
    console.log("Obesity");
}