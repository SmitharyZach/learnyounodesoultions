const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(process.argv[3]);
  console.log(stream);
  stream.pipe(res);
});

server.listen(process.argv[2], () => {
  console.log("server!");
});
