const db = require("../config/db");
//const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const card={
  get: function(callback) {
    return db.query('select * from cardnumber', callback);
  },
  getById: function(card, callback) {
    return db.query('select * from cardnumber where card_numberID=?', [card.card_numberID], callback);
  },
  add: function(card, callback) {
    bcrypt.hash(saltRounds, saltRounds, card.customerID, saltRounds, function(err, hash) {
      return db.query('insert into cardnumber (card_numberID, card_PIN, customerID, account_numberID) values(?,?,?,?)',
      [hash, hash, card.customerID, hash], callback);
    });
  },
  delete: function(card, callback) {
    return db.query('delete from cardnumber where card_numberID=?', [card], callback);
  },
  update: function(card, callback) {
    bcrypt.hash(saltRounds, saltRounds, card.customerID, saltRounds, saltRounds, function(err, hash) {
      return db.query('update cardnumber set card_numberID=?, card_PIN=?, customerID=?, account_numberID=? where card_numberID=?',
      [hash, hash, card.customerID, hash, hash], callback);
    });
  }

}
          
module.exports = card;