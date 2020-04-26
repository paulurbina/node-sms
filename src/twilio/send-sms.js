const config = require('../config')
const client = require('twilio')(config.accountSID, config.authToken)

async function sendMessage () {
    try {
        const message = await client.messages.create({
            to: config.phone,
            from: '+13344630202',
            body: 'hola que hace'
        })
        console.log(message.sid);
    } catch (error) {
        console.log(error);
        
    }
    
}

sendMessage()