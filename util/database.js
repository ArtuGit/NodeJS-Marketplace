const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'database',
    user: 'mean',
    database: 'mean',
    password: 'mean'
});

module.exports = pool.promise();