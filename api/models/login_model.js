const db = require("../config/db");
//const db = require('../database');

const login={
  checkPassword: function(customerID, callback) {
      return db.query('SELECT card_PIN FROM cardnumber WHERE customerID = ?',[customerID], callback); 
    }
};
          
module.exports = login;