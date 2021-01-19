var express = require('express');
var router = express.Router();
var path = require('path');
var HelloWorld = require('./sample/HelloWorld.js');

const mysql = require('../mysql.js');

router.get('/', function (req, res, next) {
    mysql.query('SELECT 1 FROM DUAL', function (err, rows) {
        if(err) {
            console.log('err : ' + err);
            res.send(err);
        } else {
            console.log('rows : ' + rows);
            res.send(rows);
        }
    });
});

module.exports = router;