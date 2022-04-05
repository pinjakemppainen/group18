const db = require("../config/db");
//const db = require('../database');

const login={
  checkPassword: function(username, callback) {
      return db.query('SELECT card_PIN FROM  WHERE customerID = ?',[username], callback); 
    }
};
          
module.exports = login;