'use strict'
const userSchema = require('../../models/users/schema/users')
const { createUser } = require('../../models/users/service');

module.exports = async function (fastify, opts) {
    fastify.get('/users/:id', (request, reply) => {
        // create
    });

    fastify.post('/users', userSchema, async (request, reply) => {
        const {name, password, email} = request.body
        return createUser(name, password, email);
    });

    fastify.put('/users/:id', (request, reply) => {

    });

    fastify.delete('/users/:id', (request, reply) => {

    })
}
