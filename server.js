var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello Node JS Server!!');
});

server.listen(3000, function() {
    console.log('Server is running!');
});
