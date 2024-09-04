var mysql = require('mysql2');
var pool = mysql.createPool({
    connectionLimit: 10, 
    host: 'localhost',
    database: 'memohub',
    user: 'root',
    password: ''
});

module.exports = pool.promise();