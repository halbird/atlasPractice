const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log("error: ", err.message);
});

const PostSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model("Post", PostSchema);

app.get("/", async (req, res) => {
    let post = await Post.create({title: "This is an example post title.", description: "This is an example description blah blah words go here."});
    res.send(post);
});

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});