const express = require('express');
const adminRoute = express();

const bodyParser = require('body-parser');
adminRoute.use(bodyParser.json());
adminRoute.use(bodyParser.urlencoded({extended: true}));

adminRoute.set('view engine', 'ejs');
adminRoute.set('views', './view');

const multer = require('multer');
const path = require('path');

adminRoute.use(express.static('public'));

const Storage = multer.diskStorage({

    destination:function(req,file,cb){
        cb(null, path.join(_dirname, '../public/images'));
    },
    filename: function(req, file, cb){
        const name = Date.now + '-' + file.originalname;
        cb(null, name);
    }
    
});

const upload = multer({storage:Storage});

const adminController = require("../controllers/adminController")

adminRoute.get('/login', adminController.login);
adminRoute.get('/blog-setup', adminController.blogSetup);
adminRoute.get('/blog-setup', upload.single('blog_image'), adminController.blogSetupSave);


module.exports = adminRoute;