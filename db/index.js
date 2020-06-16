"use strict"
const path = require('path');
const mongoose = require('mongoose');
const AutoLoad = require('fastify-autoload')

var options = {
    autoIndex: true, //自动创建索引
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

module.exports = async function (fastify,opts,next) {
    try {
        await mongoose.connect(process.env.MONGO_URL, options)
        fastify.log.info('success connect to db..')
        fastify.register(AutoLoad, {
            dir: path.resolve(__dirname, './models')
        })
    }catch (err) {
        fastify.log.error(err)
    }

    next()
}



