//creating HTTP Server

let http = require ("http");
let server = http.createServer ((req,res)=>{
    res.write('<h1>Hi from NodeJs Server</h1>');
    res.end();
});
server.listen(4000);
