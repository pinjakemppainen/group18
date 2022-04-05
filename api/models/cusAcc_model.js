const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const card={
  get: function(callback) {
    return db.query('select * from customer_account', callback);
  },
  getById: function(cusAcc, callback) {
    return db.query('select * from customer_account where account_numberID=?', [cusAcc.account_numberID], callback);
  },
  add: function(cusAcc, callback) {
    bcrypt.hash(saltRounds, cusAcc.customerID, function(err, hash) {
      return db.query('insert into customer_account (account_numberID, customerID) values(?,?)',
      [hash, cusAcc.customerID], callback);
    });
  },
  delete: function(cusAcc, callback) {
    return db.query('delete from customer_account where card_numberID=?', [cusAcc], callback);
  },
  update: function(cusAcc, callback) {
    bcrypt.hash(saltRounds, cusAcc.customerID, function(err, hash) {
      return db.query('update customer_account set account_numberID=?, customerID=? where account_numberID=?',
      [hash, cusAcc.customerID], callback);
    });
  }

}
          
module.exports = card;