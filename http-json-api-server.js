const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //const myURL = url.parse(req.url);
  var baseURL = "http://" + req.headers.host + "/";
  const myURL = new URL(req.url, baseURL);
  console.log(myURL);
  if (myURL.pathname === "/api/parsetime") {
    let iso = myURL.searchParams.get("iso");
    let date = new Date(iso);
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let timeObject = {
      hour: hours,
      minute: minutes,
      second: seconds,
    };
    res.end(JSON.stringify(timeObject));
  }
  if (myURL.pathname === "/api/unixtime") {
    let iso = myURL.searchParams.get("iso");
    let date = new Date(iso);
    let unix = date.getTime();
    let unixObject = {
      unixtime: unix,
    };
    res.end(JSON.stringify(unixObject));
  }

  res.end("all done");
});

server.listen(process.argv[2], () => {
  console.log("server!");
});
