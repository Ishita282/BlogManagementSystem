const express = require("express");
const userRoute = express();

const bodyParser = require("body-parser");
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({extended: true}));

const config = require("../config/config");

const session = require("express-session");
userRoute .use(session({secret:config.session_secret}));

userRoute.set('view engine', 'ejs');
userRoute.set('views', "./view");

userRoute.use(express.static('public'));

const userController = require("../controllers/userController");

userRoute.get('/login', userController.loadlogin);
userRoute.post('/login', userController.verifyLogin);

userRoute.get('/profile', userController.profile);

module.exports = userRoute;