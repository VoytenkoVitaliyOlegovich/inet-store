'use strict'

module.exports = async function (fastify, opts) {

  fastify.get('/', (request, reply) =>  {

      fastify.mysql.getConnection(onConnect)
      function onConnect(err, client) {
          if (err) return reply.send(err)

          client.query(
              'SELECT link FROM castings', [request.params.link],
              function onResult(err, result) {
                  client.release()
                  reply.send(err || result)
              }
          )
      }

  })
}
