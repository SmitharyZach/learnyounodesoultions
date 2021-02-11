const fs = require("fs");
const path = require("path");

var result = [];

fs.readdir(process.argv[2], (err, list) => {
  list.forEach((l) => {
    if (path.extname(l) === `.${process.argv[3]}`) {
      result.push(l);
    }
  });
  console.log(result.join("\r\n"));
});
