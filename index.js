const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_man_sys");

const express = require("express");
const app = express();

//exporting middleware here
const IsBlog = require('./middlewares/is_blog');
app.use(IsBlog.isblog);

// exporting routers here
const admin_Route = require("./routes/adminRoute");
app.use('/', admin_Route);

const user_Route = require("./routes/userRoute");
app.use('/', user_Route);


app.listen(3000, function() {
    console.log("Server is working");
});