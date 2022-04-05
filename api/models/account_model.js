const db = require("../config/db");
//const db = require('../database');
//const bcrypt = require('bcryptjs');
//const saltRounds=10;

const account={
  get: function(callback) {
    return db.query('select * from account', callback);
  },
  getById: function(account_numberID, callback) {
    return db.query('select * from account where account_numberID=?', [account_numberID], callback);
  },
  add: function(account_numberID, account_balance, callback) {
    return db.query('insert into account (account_numberID, account_balance) values(?,?)', [account_numberID, account_balance], callback);
  },
  delete: function(account_numberID, callback) {
    return db.query('delete from account where account_numberID=?', [account_numberID], callback);
  },
  update: function(account_numberID, account_balance, account_numberID, callback) {
    return db.query('update account set account_numberID=?, account_balance=? where account_numberID=?', [account_numberID, account_balance, account_numberID], callback);
  }
};
          
module.exports = account;