require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://hal:obisally23@halcluster-mj1to.mongodb.net/test?retryWrites=true&w=majority", {
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
    let post = await Post.create({title: "Test Title3", description: "Test description3"});
    res.send(post);
});

app.listen(process.env.PORT, () => {
    console.log("server listening on port 3000");
});