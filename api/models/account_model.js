const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from account', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from account where id_account=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(account.password, saltRounds, function(err, hash) {
      return db.query('insert into account (username, password) values(?,?)',
      [account.username, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from account where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(account.password, saltRounds, function(err, hash) {
      return db.query('update account set username=?, password=? where id_account=?',
      [account.username, hash, id], callback);
    });
  }

}
          
module.exports = user;