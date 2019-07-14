const Mongoose = require('mongoose');
let Schema = Mongoose.Schema;


let Request = new Schema({

    method: { type: String, required: true },
    time: { type: Number, required: true }, //timestamp at which request received
    duration: { type: Number, required: true }, //duration in response
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now }
});


module.exports = Mongoose.model('request', Request);