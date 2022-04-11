const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');

router.post('/', 
  function(request, response) {
    if(request.body.customerID && request.body.card_PIN){
      const customerID = request.body.customerID;
      const card_PIN = request.body.card_PIN;
        login.checkPassword(customerID, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(card_PIN,dbResult[0].card_PIN, function(err,compareResult) {
                if(compareResult) {
                  console.log("success");
                  response.send(true);
                }
                else {
                    console.log("wrong card_PIN");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not exist");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("customerID or card_PIN missing");
      response.send(false);
    }
  }
);

module.exports=router;