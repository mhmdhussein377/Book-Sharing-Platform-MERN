const Book = require("../Models/Book")

const PostBook = async(req, res) => {
    const newPost = new Book(req.body);

    try {
        const savedPost = await newPost.save();
        res
            .status(200)
            .json(savedPost);
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
};

module.exports = {
    PostBook
}