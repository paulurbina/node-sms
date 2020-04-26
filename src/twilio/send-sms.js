const config = require('../config')
const client = require('twilio')(config.accountSID, config.authToken)

const sendMessage = async (body, phone) => {
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+13344630202',
            body
        })
        return message
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sendMessage }