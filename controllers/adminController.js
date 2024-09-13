const blogSetting = require('../models/blogsettingmodel');
const user = require('../models/usermodel');
const bcrypt = require('bcrypt');

const secure_password = async (password) => {
    
    try {

        const password_hash = await bcrypt.hash(password, 10);
        
        return password_hash;

    } catch (error) {
        console.log(error.message);
    }
}

const login = async(req, res) => {

    res.send("Login is here");

}

const blogSetup = async(req, res) => {

    try {
        
        const blog_setting = await blogSetting.find({});

        if (blog_setting.length > 0) {
            res.redirect('/login');

        } else {
            res.render('blogSetup');
        }

    } catch (error) {
        console.log(error.message);
    }
}

const blogSetupSave = async(req, res) => {

    try {
        
        const blog_title = req.body.blog_title;
        const blog_image = req.file.filename;
        const description = req.body.description;
        const email = req.body.email;
        const name = req.body.name;
        const password = await secure_password(req.body.password);

        const blog_setting = new blogSetting({

            blog_title: blog_title,
            blog_logo: blog_logo,
            description: description

        });

        const BlogSetting = await blog_setting.save();

        const user = new User({
            name: name,
            email: email,
            password: password,
            is_active: 1

        });

        const userData = await user.save();
        if (userData) {
            res.redirect('/login');
        } else {
            res.render('blogSetup', {message: 'Blog not setup properly!'});
        }

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    login,
    blogSetup
}