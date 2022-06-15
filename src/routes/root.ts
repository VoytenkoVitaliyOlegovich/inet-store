'use strict'

import {FastifyInstance, FastifyServerOptions} from "fastify";

export default async function (fastify:FastifyInstance, opts:FastifyServerOptions) {
  fastify.get('/', async function (request, reply) {

    return { root: true }

  })
}
