"use strict"
const mongoose = require('mongoose');
const utils = require('../../utils/index');

/** 测试接口代码
 http DELETE :3000/v1/user/5ee82f7bb278ef0bb9fb5924
 */

module.exports = function (fastify, opts, next) {

    fastify.delete('/:resource/:id', async function (request, reply) {

        let modelName = utils.resourceValidate(request.params.resource);
        let resource_id = utils.idValidate(request.params.id)

        const Model = mongoose.model(modelName)
        let result = await Model.deleteOne({_id:resource_id})
        if (result.ok == 1) reply.send({ result_code: reply.statusCode})
        else reply.send({ result_code: '1001', err_msg: 'delete fail'})
    })


    next()
}