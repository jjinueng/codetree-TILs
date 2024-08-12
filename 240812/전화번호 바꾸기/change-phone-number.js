const fs = require("fs");
let [a, xxxx, yyyy] = fs.readFileSync(0).toString().split("-");

console.log(`010-${Number(yyyy)}-${Number(xxxx)}`);