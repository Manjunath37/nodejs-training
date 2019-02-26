const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req,res,) {
    res.statusCode= 200;
    res.end('hello world');
});
server.listen(port,hostname,function() {
    console.log('start tthe server');
});