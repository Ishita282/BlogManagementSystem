const mongo = require('mongoose');

const userSchema = mongo.Schema({

    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    is_active:{
        type: String,
        require: true
    },

    token:{
        type: String,
        default: ''
    }

});

module.exports = mongo.model('User', userSchema);