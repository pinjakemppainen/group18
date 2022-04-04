const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from cards', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from cards where id_card=?', [id], callback);
  },
  add: function(card, callback) {
    bcrypt.hash(card.password, saltRounds, function(err, hash) {
      return db.query('insert into cards (id, username, password, card_number) values(?,?,?,?)',
      [card.card_details, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from cards where id_card=?', [id], callback);
  },
  update: function(id, card, callback) {
    bcrypt.hash(card.password, saltRounds, function(err, hash) {
      return db.query('update cards set id=?, username=?, password=?, card_number=? where id_card=?',
      [card.card_details, hash, id], callback);
    });
  }

}
          
module.exports = card;