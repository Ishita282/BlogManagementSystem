const express = require("express");
const app = express();

const mongo = require("mongoose");
mongo.connect("mongodb://localhost:27017/blog_man_sys");


//exporting middleware here
const IsBlog = require('./middlewares/is_blog');
app.use(IsBlog.isblog);

// exporting routers here
const admin_Route = require("./routes/adminRoute");
app.use('/', admin_Route);

app.listen(3000, function() {
    console.log("Server is working");
});