'use strict'
const {getUsers, getUser} = require("../../../models/users/service");
const {usersSerialize, userEditSerialize} = require("../../../collections/user");


module.exports = async function (fastify, opts) {

    fastify.get('/', async (request, reply) => {
        //get all users
        const {limit, offset} = request.query
        const users = await getUsers(limit, offset)

        if (users) {
           return usersSerialize(users)
        }
    });

    fastify.get('/:id', async (request, reply) => {
        // get user
        const id = request.params.id
        const user = await getUser(id)

        if(user) {
            return userEditSerialize(user)
        }
    });

    fastify.delete('/users/:id', (request, reply) => {

    })
}
