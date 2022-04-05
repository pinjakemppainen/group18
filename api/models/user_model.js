const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from customer', callback);
  },
  getById: function(user, callback) {
    return db.query('select * from customer where customerID=?', [user], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(saltRounds, user.customer_name, user.address, user.phoneNum, function(err, hash) {
      return db.query('insert into customer (customerID, customer_name, customer_address, customer_phoneNum) values(?,?,?,?)',
      [hash, user.customer_name, user.address, user.phoneNum], callback);
    });
  },
  delete: function(user, callback) {
    return db.query('delete from customer where customerID=?', [user], callback);
  },
  update: function(user, callback) {
    bcrypt.hash(saltRounds, user.customer_name, user.address, user.phoneNum, function(err, hash) {
      return db.query('update customer set customerID=?, customer_name=?, customer_address=?, customer_phoneNum=? where customerID=?',
      [hash, user.customer_name, user.address, user.phoneNum], callback);
    });
  }

}
          
module.exports = user;