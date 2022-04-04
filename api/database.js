const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'banksimul'
});
module.exports = connection;