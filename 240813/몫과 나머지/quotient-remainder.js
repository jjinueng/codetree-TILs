const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

console.log(`${parseInt(a / b)}...${a % b}`);