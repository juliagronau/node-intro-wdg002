// const os = require("os");
import os from "os";

// displays the remaining free memory of the computer
console.log(os.freemem());
console.log("Hello WDG002");

import fs from "fs";

fs.writeFile("test.txt", "Guten Morgen", function (err, data) {
  if (err) throw err;
  console.log(data);
});

import http from "http";

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(8080);
