const { Router } = require('express');
const logger = require('../utils/logger');
const sendMail = require('../controller/sendmail/sendMailConfig')

const buyRouter = Router();

buyRouter.post('/', (req, res) => {
    try {
        sendMail.sendBuy(req.session.email, req.body)
    } catch (error) {
        logger.error(`ocurrio un error en buyRouter.post: ${error}`)
    }
})

module.exports = buyRouter;