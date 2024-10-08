const mongo = require('mongoose');

const blogSettingSchema = mongo.Schema({

    blog_title:{
        type: String,
        require: true
    },

    blog_logo:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    }

});

module.exports = mongo.model('BlogSetting', blogSettingSchema);