const fs = require("fs");
let a = fs.readFileSync(0).toString().split(" ").map(Number);

if (a >= 113) {
    console.log(1);
} else {
    console.log(0);
}