const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);

console.log(`${a} ${b} ${c}`);