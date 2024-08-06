const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

var answer = 0;

for(var i=10; i<=input; i++){
    answer += i;
}

console.log(answer);