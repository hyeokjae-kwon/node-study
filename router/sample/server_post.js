var http = require('http');

// querystring 모듈
var querystring = require('querystring');

var server = http.createServer(function(request, response) {

    var postdata = '';
    // request 객체에 on() 함수로 'data' 이벤트를 연결
    request.on('data', function(data) {
        // data 이벤트가 발생할 때 마다 callback을 통해 postdata 변수에 값을 저장
        postdata = postdata + data;
    });

    // request 객체에 on() 함수로 'end' 이벤트를 연결
    request.on('end', function() {
        //  'end' 이벤트가 발생하면(end 이벤트는 한번만 발생) 위에서 저장한 postdata를 querystring으로 전달
        var parseQuery = querystring.parse(postdata);
        console.log(parseQuery);

        // charset : utf-8 로 설정
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end('var3의 값은 : ' + parseQuery.var3);
    });
});

server.listen(3000, function() {
    console.log('Server is running...');
});

// postman 호출 url : localhost:3000