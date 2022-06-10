'use strict'


require('dotenv').config()
const path = require('path')
const AutoLoad = require('@fastify/autoload')



module.exports = async function (fastify, opts) {
    // Place here your custom code!

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application


    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })


    fastify.register(require('@fastify/cors'), {
        // put your options here
    })


    fastify.register(require('@fastify/jwt'), {
        secret: process.env.JWT_SECRET,
        // verify: {
        //     extractToken: (req) => {
        //        return req.body.token
        //     }
        // }
    })



    // if(process.env.NODE_ENV = 'development') {
    //     fastify.log.info(fastify.printRoutes())
    // }

}
