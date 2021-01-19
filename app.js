var express = require('express');
var app = express();

/* mysql 연결 */
const mysql = require('./mysql.js');
mysql.connect();

var router = require('./router/index');

/* port info */ 
app.listen(3000, function() {
    console.log("Start!! express server on port 3000");
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(router);