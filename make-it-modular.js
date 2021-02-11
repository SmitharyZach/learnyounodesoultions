var worker = require("./mymodule");

const callback = function (err, list) {
  if (err) {
    return console.error(err);
  }
  console.log(list.join("\r\n"));
};

worker(process.argv[2], process.argv[3], callback);
