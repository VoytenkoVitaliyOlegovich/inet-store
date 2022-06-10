'use strict'
const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const failResponse = function (reply, message) {
    reply.statusCode = 400
    return {
        message,
    }
}
module.exports = async function (fastify, opts) {

    fastify.get('/users', (request, reply) => {
        const email = request.query.email
        const password = request.query.password
        if (validator.isEmail(email) && password.length < 2) {
            return reply.send(failResponse(reply, 'Not valid email or password'))
        }

        fastify.mysql.getConnection(onConnect)

        function onConnect(err, client) {
            if (err) return reply.send(err)

            // email | password
            // email -> search in db
            // password (plain text) COMPARE hash in db

            client.query(
                'SELECT * FROM users WHERE email = ? limit 1', [email],
                function onResult(err, result) {
                    const user = result[0] ?? undefined;
                    if (undefined === user) {
                        reply.send({
                            auth: true
                        })
                    }

                    const isValidPassword = bcrypt.compareSync(email, password)
                    client.release()

                    if (isValidPassword) {

                        return reply.send(failResponse(reply, 'Not valid email or password'))
                    } else {
                        reply.send({
                            auth: true
                        })
                    }
                }
            )
        }

    });
    fastify.get('/users/:id', (request, reply) => {
        // create
    });

    fastify.post('/users', (request, reply) => {

        const body = request.body

        // create
        fastify.mysql.getConnection(addUser)


        function addUser(err, client) {
            if (err) return reply.send(err);

            bcrypt.genSalt(saltRounds, function (err, salt) {
                if (err) return reply.send(err)
                bcrypt.hash(body.password, salt, function (err, hash) {
                    if (err) return reply.send(err)
                    // Store hash in your password DB.
                    client.query('INSERT INTO users (name, password, email) VALUES (?,?,?)', [body.name, hash, body.email],
                        function onResult(err, result) {
                            client.release()
                            reply.send(err || result)
                        })
                });
            });
        }

    });

    fastify.put('/users/:id', (request, reply) => {

    });
    fastify.delete('/users/:id', (request, reply) => {

    })
    // fastify.post('/', () =>{
    //
    //   })
}
