const MessagingResponse = require('twilio').twiml.MessagingResponse
const { sendMessage } = require('../twilio/send-sms')
const SMS = require('../models/sms')

const { getSocket } = require('../socket')

const indexController = async (req, res) => {
    const messages = await SMS.find().sort('-createdAt').lean()
    res.render('index', { messages })
}

const postMessage = async (req, res) => {
    const { message, phone } = req.body
    if (!message || !phone) return res.json('Missing message or phone!')
    const result = await sendMessage(message, phone)
    console.log(result.sid);
    
    SMS.create({ Body: message, To: phone })
    res.redirect('/')
}

const receiveMessage = async (req, res) => {

    const { Body, From } = req.body

    // console.log(req.body);
    

    const savedMSM = await SMS.create({ Body,From })

    getSocket().emit('new message', savedMSM)

    const twiml = new MessagingResponse
    twiml.message('This is my response')

    res.send(twiml.toString())

}

module.exports = {
    indexController,
    postMessage,
    receiveMessage
}