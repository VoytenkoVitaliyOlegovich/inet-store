'use strict'

const {singUser} = require("../../../models/users/service");
const {failResponse, sendToken} = require("../../../server/response/utils")

const {schemaAuth} = require("../../../models/users/schema/auth");

module.exports = async function (fastify, opts) {

    fastify.post('/', (request, reply) => {

        const {password, email} = request.body

        return singUser(email, password)
            .then((user)=> {
                const token = fastify.jwt.sign({ id: user.id })

                sendToken(reply, token)
            })
            .catch((err) => {
                failResponse(reply, err)
            });
    });

}
