function failResponse (reply, message) {
    reply.statusCode = 400
    reply.send(message)
}

function sendToken(reply, message) {
    reply.send({token: message})
}

module.exports = {
    failResponse,
    sendToken
}