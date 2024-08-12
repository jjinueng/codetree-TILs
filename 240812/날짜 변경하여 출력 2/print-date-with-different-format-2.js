const fs = require("fs");
let [mm, dd, yyyy] = fs.readFileSync(0).toString().split("-");

console.log(`${Number(yyyy)}.${Number(mm)}.${Number(dd)}`);