'use strict'
import {FastifyInstance, FastifyServerOptions} from "fastify";

import {getUsers, getUser, editUser} from "../../../models/users/service"
import {usersSerialize, userEditSerialize, userSerialize} from "../../../collections/user"
import {Static} from "@sinclair/typebox";
import {schemaGetUser, schemaPaginateUsers, schemaUpdateUser} from "../../../server/request/schema/users";

export default async function (fastify: FastifyInstance, opts: FastifyServerOptions) {
    const pathApi: string = '/api/users'
    //get all users
    fastify.get<{ Querystring: Static<typeof schemaPaginateUsers.querystring> }>(pathApi, {
        schema: schemaPaginateUsers
    }, async (request, reply) => {

        const {limit, offset} = request.query

        const users = await getUsers(limit, offset)

        return usersSerialize(users)
    });

    // get user
    fastify.get<{ Params: Static<typeof schemaGetUser.params> }>(pathApi + '/:id', {
            schema: schemaGetUser
        },async (request, reply) => {
        const {id} = request.params
        const user = await getUser(id)

        if (user) {
            return userSerialize(user)
        }
        return undefined
    });

    //edit user
    fastify.put<{Body: Static<typeof schemaUpdateUser.body> }>(pathApi + '/:id', {
        schema: schemaUpdateUser
    },async (request, reply) => {
        const user = await editUser(request.body.email, request.body.password, request.body.id, request.body.name)

        if (user) {
            return userEditSerialize(user)
        }
        return undefined
    });

    fastify.delete('/users/:id', (request, reply) => {

    })
}
