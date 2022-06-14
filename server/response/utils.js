"use strict";
exports.__esModule = true;
exports.sendToken = exports.failResponse = void 0;
function failResponse(reply, message) {
    reply.statusCode = 400;
    reply.send(message);
}
exports.failResponse = failResponse;
function sendToken(reply, message) {
    reply.send({ token: message });
}
exports.sendToken = sendToken;
