const { Schema, model } = require('mongoose')

const smsSchema =  new Schema({
    Body: {
        type: String,
        required: true
    },
    From: {
        type: String,
    },
    To: { 
        type: String,
        // required: true
    }
}, {
    timestamps: true
})

module.exports = model('SMS', smsSchema)