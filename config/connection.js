require("dotenv").config()
/////////////////////////////////
// set up mysql connection
var mysql = require('mysql');

var config = {
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

var connection;

var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    connection = mysql.createConnection(config);
    host = 'localhost';
}


///make connection
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
///export coonection for our ORM to use
module.exports = connection;