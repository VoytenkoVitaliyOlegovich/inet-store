'use strict'

const schemas = require('../schemas/auth')

module.exports = async function (fastify, opts) {
    fastify.post('/token', { schema: schemas.token }, async function (request, reply) {
        const { username, password } = request.body

    })
}

module.exports.autoPrefix = '/auth'