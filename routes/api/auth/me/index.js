'use strict'
const {parseGetJwt} = require('../../../../server/request/middleware/jwt')
const {findOneById} = require("../../../../models/users/repository");
const {userSerialize} = require("../../../../collections/user");

module.exports = async function (fastify, opts) {

    fastify.get('/', async (request, reply) => {

        const getIdJwt = parseGetJwt(request, fastify)
        const user = await findOneById(getIdJwt.id)

        if(user) {
            return userSerialize(user)
        }
        else {
            reply.statusCode = 403
            reply.send('user not found')
        }

    });

}
