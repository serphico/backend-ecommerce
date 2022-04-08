const { Router } = require('express');
const logger = require('../utils/logger');


const cart = Router();

cart.post("/", (req, res) => {

    console.log(req.body)

  });

 module.exports = cart;