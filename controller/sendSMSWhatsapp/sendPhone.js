const twilio = require('twilio')
const logger = require('../../utils/logger')

const accountSid = '';

const authToken = '';

const client = twilio(accountSid, authToken);


class sendTwilio{
    constructo(){
    }

    async sendSms(phone){

        try {
            const message = await client.messages.create({
                body: 'Pedido recibido!',
                from: '+14156884237',
                to: JSON.stringify(phone)
             })
             console.log(message)
        } catch (error) {
            logger.error(`error en metodo sendSms: ${error}`)
        }
    }

    async sendWhatsapp(){
        try {
            
        } catch (error) {
            logger.error(`error en metodo sendWhatsapp: ${error}`)
  
        }
    }
}