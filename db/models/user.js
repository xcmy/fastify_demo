let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name:  {
        type:String,
        required:true
    }, // String is shorthand for {type: String}
    age: String,
    body:   String,
    file: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});


module.exports = function (fastify, opts, next) {
    mongoose.model('User', userSchema);
    fastify.log.info('User load success...')
    next()
}

// module.exports = mongoose.model('User', userSchema);