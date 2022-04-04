const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from users', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from users where id_user=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into users (username, password) values(?,?)',
      [user.username, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from users where id_user=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update users set username=?, password=? where id_user=?',
      [user.username, hash, id], callback);
    });
  }

}
          
module.exports = user;