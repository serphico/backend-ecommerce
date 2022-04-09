const { Router } = require('express');
const logger = require('../utils/logger');
const cartHandler = require('../controller/cartController')

const cartRoute = Router();

cartRoute.get('/', (req,res)=>{
    try {
        let isLogin = req.session.email
        let resp = res;
        cartHandler.showCart()
        .then(cartContent =>{
            resp.json({cartContent , isLogin: JSON.stringify(isLogin)})
        })
    } catch (error) {
        logger.info(`error on cart.get: ${error}`)

    }
})

cartRoute.post("/", (req, res) => {
    try {
        cartHandler.addProd(req.body)
    } catch (error) {
        logger.info(`error on cart.post: ${error}`)
    }
  });

 module.exports = cartRoute;