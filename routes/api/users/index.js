'use strict'
const {getUsers, getUser, editUser} = require("../../../models/users/service");
const {usersSerialize, userEditSerialize} = require("../../../collections/user");
const {schema} = require("../../../models/users/schema/users");


module.exports = async function (fastify, opts) {

    //get all users
    fastify.get('/', async (request, reply) => {

        const {limit, offset} = request.query
        const users = await getUsers(limit, offset)

        if (users) {
           return usersSerialize(users)
        }
    });

    // get user
    fastify.get('/:id', async (request, reply) => {
        const id = request.params.id
        const user = await getUser(id)

        if(user) {
            return userEditSerialize(user)
        }
    });

    //edit user

    fastify.put('/:id', async (request, reply) => {
        const userNew = request.body
        const user = await editUser(userNew)
        //
        // if(user) {
        //     return userEditSerialize(user)
        // }
    });

    fastify.delete('/users/:id', (request, reply) => {

    })
}
