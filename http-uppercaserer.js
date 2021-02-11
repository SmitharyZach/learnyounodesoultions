const http = require("http");
const map = require("through2-map");

const server = http.createServer((req, res) => {
  req.pipe(upperCase).pipe(res);
});

server.listen(process.argv[2], () => {
  console.log("server!");
});

var upperCase = map(function (chunk) {
  return chunk.toString().toUpperCase();
});
