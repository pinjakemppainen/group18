const db = require("../config/db");
//const db = require('../database');
//const bcrypt = require('bcryptjs');
//const saltRounds=10;

const user={
  get: function(callback) {
    return db.query('select * from customer', callback);
  },
  getById: function(user, callback) {
    return db.query('select * from customer where customerID=?', [user], callback);
  },
  add: function(user, callback) {
    return db.query('insert into customer (customer_name, customer_address, customer_phoneNum) values(?,?,?)', [user.customer_name, user.customer_address, user.customer_phoneNum], callback);
  },
  delete: function(user, callback) {
    return db.query('delete from customer where customerID=?', [user.customerID], callback);
  },
  update: function(user, callback) {
    return db.query('update customer set customer_name=?, customer_address=?, customer_phoneNum=? where customerID=?', [user.customer_name, user.customer_address, user.customer_phoneNum, user.customerID], callback);
    }
};
          
module.exports = user;