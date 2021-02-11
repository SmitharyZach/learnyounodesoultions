const { RSA_NO_PADDING } = require("constants");

http = require("http");

http.get(process.argv[2], function (response) {
  response.setEncoding("utf8");
  let rawData = "";
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    let wordCount = rawData.split("").length;
    console.log(wordCount);
    console.log(rawData);
  });
});
