const net = require("net");

const server = net.createServer(function (socket) {
  console.log("connected");

  socket.on("end", () => {
    console.log("disconnected!");
  });
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) {
    day = `0${date.getDate()}`;
  }
  if (month < 10) {
    month = `0${date.getMonth() + 1}`;
  }
  if (hours < 10) {
    hours = `0${date.getHours()}`;
  }
  data = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.end(data);
});

server.on("error", (err) => {
  throw err;
});

server.listen(process.argv[2], () => {
  console.log("woo!");
});
