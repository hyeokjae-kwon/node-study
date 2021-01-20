var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    console.log(request.url);

    var parseUrl = url.parse(request.url);

    // uri 가져오는 부분
    var resource = parseUrl.pathname;
    console.log('resource path=%s', resource);

    if(resource == '/address/si') {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('서울특별시');
    } else if(resource == '/address/gu') {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('서울특별시 종로구');
    } else if(resource == '/phone') {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('010-3365-5168');
    } else if(resource == '/name') {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('권혁재');
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('404 Page Not Found');
    }
});

server.listen(3000, function() {
    console.log('Server is running....!');
});