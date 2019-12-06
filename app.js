require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hal:" + process.env.DB_PASS + "@halcluster-mj1to.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to alas DB");
}).catch(err => {
    console.log("error: ", err.message);
});

const PostSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model("Post", PostSchema);

app.get("/", async (req, res) => {
    let post = await Post.create({title: "Test Title2", description: "Test description2"});
    res.send(post);
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});