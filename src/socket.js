const socketIO = require('socket.io')

let socket
const connection = server => {
    const io = socketIO.listen(server)
    
    io.on('connection', brandNewSocket => {
        socket = brandNewSocket
        console.log(brandNewSocket.id);
        
    })
}

const getSocket = () => socket

module.exports = { connection, getSocket }