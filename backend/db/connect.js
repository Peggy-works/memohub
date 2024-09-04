var mysql = require('mysql2');
require('dotenv').config();

var pool = mysql.createPool({
    connectionLimit: 10, 
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});

module.exports = pool.promise();