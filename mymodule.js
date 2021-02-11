const fs = require("fs");
const path = require("path");
module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err) {
      return callback(err);
    }
    result = [];
    list.forEach((l) => {
      if (path.extname(l) === `.${ext}`) {
        result.push(l);
      }
    });
    callback(null, result);
  });
};
