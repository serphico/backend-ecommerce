const { Router } = require('express');
const path = require('path');
const productsController = require('../DAOs/productController');
const logger = require('../utils/logger');


const home = Router();

home.get("/", (req, res) => {
  try {
    let isLogin = req.session.email
    console.log(isLogin)
   let resp = res;
    productsController.findProduct()
    .then(res => {
      resp.json({ productos: res, isLogin: JSON.stringify(isLogin)});
      logger.info(res)
    })

  } catch (error) {
    
  }


  });

 module.exports = home;