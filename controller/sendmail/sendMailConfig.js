const { createTransport } = require('nodemailer');
const logger = require('../../utils/logger')
const User = require('../schemas/schemaUser')


/*mail de test*/
const TEST_MAIL = 'gwen.tillman23@ethereal.email'

/*CUENTA QUE ENVIA (TRANSPORTE)*/
const transporter = createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'HaWH99GCBtVsF7zpyE'
   }
});



 
 class SendMail{

    constructor(){
        this.from,
        this.to,
        this.subject,
        this.html
    }

    async sendBuy(username, body){
        
        User.findOne({'email': username}, (err, user) =>{

            this.from = TEST_MAIL;
            this.to = TEST_MAIL;
            this.subject = `nuevo pedido de ${user.fullName} con email ${user.email}`;
            this.html = JSON.stringify(body);

            


        /* OPCIONES/DATOS DE ENVIO DE MAIL */
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: this.html
         }
         logger.info(mailOptions)
         try {
            transporter.sendMail(mailOptions)
            logger.info(`mensaje enviado`)
         } catch (error) {
            logger.error(`error en metodo sendBuy: ${error}`)
         }
         
        })

    }

    async sendRegister(dataRegister){

        this.from = TEST_MAIL;
        this.to = TEST_MAIL;
        this.subject = `nuevo registro`;
        this.html = JSON.stringify(dataRegister);

        /* OPCIONES/DATOS DE ENVIO DE MAIL */
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: this.html
         }

         try {
            await transporter.sendMail(mailOptions)
            logger.info(`Registro enviado`)
         } catch (error) {
            logger.error(err)
         }
    }

 }

 const sendMail = new SendMail()

 module.exports = sendMail;