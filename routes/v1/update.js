"use strict"
const mongoose = require('mongoose');
const utils = require('../../utils/index')


/** 测试接口代码
 http  :3000/v1/user
 */

module.exports = function (fastify, opts, next) {

    fastify.put('/:resource/:id', async function (request, reply) {

        let modelName = utils.resourceValidate(request.params.resource);
        let resource_id = utils.idValidate(request.params.id)

        const Model = mongoose.model(modelName)
        let result = await Model.findById(resource_id)
        reply.send({ result_code: reply.statusCode,  data: result})
    })


    next()
}