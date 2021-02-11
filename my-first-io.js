const fs = require("fs");

let buf = fs.readFileSync(process.argv[2]);
let arr = buf.toString().split("\n");

console.log(arr.length - 1);
