let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});


module.exports = function (fastify, opts, next) {
    module.exports = mongoose.model('Blog', blogSchema);
    fastify.log.info('Blog load success...')
    next()
}


