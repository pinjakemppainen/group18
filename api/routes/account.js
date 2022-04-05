const express = require('express');
const router = express.Router();
const account = require('../models/account_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.account_numberID) {
    console.log('Käyttäjä antoi'+request)
    account.getById(request.params.account_numberID, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    account.get(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

router.post('/', 
function(request, response) {
  account.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body); 
    }
  });
});

router.delete('/:id', 
function(request, response) {
  account.delete(request.params.account_numberID, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});

router.put('/:id', 
function(request, response) {
  account.update(request.params.account_numberID, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;