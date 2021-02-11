const { get } = require("http");

http = require("http");

// async function logStuff() {
//   const [valueA, valueB, valueC] = await Promise.all([
//     getStuff(process.argv[2]),
//     getStuff(process.argv[3]),
//     getStuff(process.argv[4]),
//   ]);
//   console.log(valueA, valueB, valueC);
// }

// const getStuff = (url) => {
//   http.get(url, function (response) {
//     response.setEncoding("utf8");
//     let rawData = "";
//     response.on("data", (chunk) => {
//       rawData += chunk;
//     });
//     response.on("end", () => {
//       console.log(rawData);
//     });
//   });
// };
// getStuff(process.argv[2]);

//logStuff();

var results = [];
var count = 0;

function printResults() {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function getStuff(index) {
  http.get(process.argv[2 + index], function (response) {
    const { statusCode } = response;
    let error;
    if (statusCode != 200) {
      error = new Error("Blergh something wrong");
    }

    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }
    response.setEncoding("utf8");
    let rawData = "";
    response.on("data", (chunk) => {
      rawData += chunk;
    });
    response.on("end", () => {
      results[index] = rawData;
      count++;
      if (count === 3) {
        printResults();
      }
    });
  });
}

for (var i = 0; i < 3; i++) getStuff(i);
