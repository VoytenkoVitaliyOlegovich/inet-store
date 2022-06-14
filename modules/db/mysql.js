"use strict";
exports.__esModule = true;
var mysql = require('mysql2');
exports["default"] = mysql.createConnection(process.env.MYSQL_URL).promise();
