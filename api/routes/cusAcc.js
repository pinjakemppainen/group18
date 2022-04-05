const express = require('express');
const router = express.Router();
const cusAcc = require('../models/cusAcc_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.cusAcc) {
    console.log('Käyttäjä antoi'+request)
    cusAcc.getById(request.params.cusAcc, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    cusAcc.get(function(err, dbResult) {
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
  cusAcc.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body); 
    }
  });
});

router.delete('/:id', 
function(request, response) {
  cusAcc.delete(request.params.cusAcc, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});

router.put('/:id', 
function(request, response) {
  cusAcc.update(request.params.cusAcc, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;