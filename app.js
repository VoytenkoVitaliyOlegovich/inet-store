'use strict'


require('dotenv').config()
const path = require('path')
const AutoLoad = require('@fastify/autoload')
const mysql = require('@fastify/mysql')


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

    fastify.register(mysql, {
        connectionString: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_USER}@${process.env.MYSQL_URL}/${process.env.MYSQL_DATABASE}`
    })

    fastify.register(require('@fastify/cors'), {
        // put your options here
    })


}
