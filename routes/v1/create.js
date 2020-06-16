"use strict"
const mongoose = require('mongoose');
const utils = require('../../utils/index')

/** 测试接口代码
 http  :3000/v1/user
 */

module.exports = function (fastify, opts, next) {

    fastify.post('/:resource', async function (request, reply) {

        let modelName = utils.resourceValidate(request.params.resource);
        const Model = mongoose.model(modelName)

        let result = await Model.create(request.body)

        reply.send({ result_code: reply.statusCode,  data: result})
    })

    next()
}