'use strict'

const mongoose = require('mongoose');

function resourceValidate(resource){
    if (!resource) throw new Error('Invalid resource in url')
    resource = resource.charAt(0).toUpperCase() + resource.slice(1);

    let models = mongoose.modelNames();
    if (models.indexOf(resource) != -1){
        return resource
    }else {
        throw new Error(`no schema ${resource}`)
    }
}

function idValidate(id){
    if (!id || id.toString().length != 24) throw new Error('Invalid id in url')
    return id
}


module.exports = {
    resourceValidate:resourceValidate,
    idValidate:idValidate,
}
