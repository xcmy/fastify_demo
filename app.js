"use strict"

/**
 Require the framework and instantiate it
 */
// 加载环境变量配置文件
require("dotenv").config()

// 加载日志配置文件
const log = require("./log")

// 创建fastify-app，设置{logger: fase}禁止输出
const fastify = require('fastify')({ logger: log })

// cors设置
fastify.register(require('fastify-cors'), {
    // put your options here
})

// 数据库连接
fastify.register(require('./db/index'))

// 路由注册
fastify.register(require('./routes/index'))

// 请求错误处理
fastify.setErrorHandler(function (error, request, reply) {
    reply.send({
        request_url: request.url,
        result_code: reply.statusCode,
        err_msg: error.message
    })
})

fastify.listen(process.env.PORT || 3000, function (err,address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Server listening on ${address}`)
})