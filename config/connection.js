//("dotenv").config();
var mysql = require('mysql');

var config = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "summer051597",
    database: "burgers_db"
}
var connection = mysql.createConnection(config);
// var connection;

// var host;
// console.log("connection.js 4");
// if (process.env.JAWSDB_URL) {
//     var connection = mysql.createConnection(process.env.JAWSDB_URL);
//     host = 'JAWSDB';
// } else {
//     connection = mysql.createConnection(config);
//     host = 'localhost';
// }



connection.connect(function (err) {
    console.log("connect to db on ")
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;