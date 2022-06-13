'use strict'
const userSchema = require('../../../../models/users/schema/users')
const { createUser } = require('../../../../models/users/service');

module.exports = async function (fastify, opts) {
    fastify.post('/', userSchema, async (request, reply) => {
        const {name, password, email} = request.body
        return createUser(name, password, email);
    });
}
