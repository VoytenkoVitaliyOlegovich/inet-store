import {FastifyReply} from "fastify";

export function failResponse (reply:FastifyReply, message:string) {
    reply.statusCode = 400
    reply.send(message)
}

export function sendToken(reply:FastifyReply, message:string) {
    reply.send({token: message})
}

export function deleteUser(reply:FastifyReply, message:string) {
    reply.send({user_delete: message})
}