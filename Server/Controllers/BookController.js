const Book = require("../Models/Book")
const User = require("../Models/User")

const PostBook = async(req, res) => {
    const user = await User.findById(req.body.user)
    const newPost = new Book(req.body);

    try {
        const savedPost = await newPost.save();
        await user.updateOne({
            $push: {
                posts: savedPost._id
            }
        })
        res
            .status(200)
            .json(savedPost);
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
};

const FollowingBooks = async(req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const following = user.following;

        let users = await Promise.all(following.map((followingId) => {
            return User.findById(followingId);
        }));

        let postsIds = [];

        users.map((user) => postsIds.push(...user.posts));

        let posts = await Promise.all(postsIds.map((postId) => {
            return Book.findById(postId);
        }));

        res
            .status(200)
            .json(posts);
    } catch (error) {
        res
            .status(500)
            .json(error)
    }
}

const LikeBook = async(req, res) => {
    try {
        const post = await Book.findById(req.params.bookId)

        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: {
                    likes: req.body.userId
                }
            });
            res
                .status(200)
                .json("You just liked the post");
        } else {
            await post.updateOne({
                $pull: {
                    likes: req.body.userId
                }
            });
            res
                .status(200)
                .json("You just disliked the post");
        }
    } catch (error) {
        res
            .status(500)
            .json(error)
    }
}

const BookLikes = async(req, res) => {
    try {
        const post = await Book.findById(req.params.bookId)
        res
            .status(200)
            .json(post.likes)
    } catch (error) {
        res
            .status(500)
            .json(error)
    }
}

module.exports = {
    PostBook,
    FollowingBooks,
    LikeBook,
    BookLikes
}