let http = require("http"); //importing http server
let fs = require("fs"); //importing file system

let server = http.createServer((req, res) => {
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(4002);

