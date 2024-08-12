const fs = require("fs");
let [yyyy, mm, dd] = fs.readFileSync(0).toString().split(".");

console.log(`${Number(mm)}-${Number(dd)}-${Number(yyyy)}`);