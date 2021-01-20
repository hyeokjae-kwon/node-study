var http = require('http');

// url 모듈
var url = require('url');
// querystring 모듈
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

    console.log('--- log start ---');
    // 브라우저에서 요청한 주소를 parsing 하여 출력
    var parseUrl = url.parse(request.url);
    console.log(parseUrl);
    // url 중 querystring 부분만 따로 출력
    var parseQuery = querystring.parse(parseUrl.query,'&','=');
    console.log(parseQuery);

    console.log('--- log end ---');
    // charset : utf-8 로 설정
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    response.end('var3의 값은 : ' + parseQuery.var3);
});

server.listen(3000, function() {
    console.log('Server is running...');
});

// 호출 url : http://localhost:3000/?var1=newData&var2=153&var3=testdata2021