"use strict"

const AutoLoad = require('fastify-autoload');
const path = require('path');

module.exports = function (fastify,opts,next) {
    fastify.register(AutoLoad, {
        dir: path.resolve(__dirname, './v1'),
        options:{
            prefix:'/v1'
        }
    })
    next()
}