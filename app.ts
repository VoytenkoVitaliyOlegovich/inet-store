import * as dotenv from "dotenv";
import * as path from 'path';
import cors from '@fastify/cors'
import fastifyJwt, { FastifyJWTOptions } from '@fastify/jwt'
import {FastifyInstance, FastifyServerOptions} from "fastify";

import root from "./routes/root";
import auth from "./routes/api/auth/index";
import users from "./routes/api/users/index";
import {Static, Type} from "@sinclair/typebox";
import {schemaCreateUser, schemaPaginateUsers} from "./server/request/schema/users";

dotenv.config()

export default async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
    root(fastify, opts)
    auth(fastify, opts)
    users(fastify, opts)



    fastify.register(cors, {
        // put your options here
    })


    fastify.register(fastifyJwt, {
        secret: process.env.JWT_SECRET as string,
    })

    const authRoutse: {[key:string]:boolean} = {
        '/api/auth/signin': true,
        '/api/auth/signup': true
    }

    fastify.addHook("onRequest", async (request, reply) => {
        try {
            const path = request.routerPath
            if (!authRoutse[path]) {
                await request.jwtVerify()
            }
        } catch (err) {
            reply.send(err)
        }
    })
}

