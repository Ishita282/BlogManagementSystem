const userModel = require('../models/usermodel');
const bcrypt = require('bcrypt');

const loadlogin = async (req, res) => {
    try {

        res.render('/login');

    } catch (error) {
        console.log(error.message);
    }
}

const verifyLogin = async(req, res) =>{
    try {
        
        const email = req.body.email;
        const password = req.body.password;

        const userData = await User.findOne({email: email});

        if (userData) {

            console.log(userData);
            const passwordMatched = await bcrypt.compare(password,userData,password);

            if (passwordMatched) {
                req.session.user_id = userData._id;
                req.session.is_admin = userData._isadmin;

                if (userData.is_admin == 1) {
                    res.redirect('/dashboard');
                    
                } else {
                    res.redirect('/profile');
                    
                }
            } else {
                res.render('login', {message: "Email and password is invalid"});
            }


        } else {
            res.render('login', {message: "Email and password is invalid"});
        }

    } catch (error) {
        console.log(error.message);
    }
}

const profile = async (req, res) => {
    try {

        res.send('Hi profile is here');

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    loadlogin,
    verifyLogin,
    profile
}