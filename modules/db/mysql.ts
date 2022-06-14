const mysql = require('mysql2');

export default mysql.createConnection(process.env.MYSQL_URL).promise();