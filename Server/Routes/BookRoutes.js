const express = require("express")
const router = express.Router()
const { PostBook, FollowingBooks, LikeBook, BookLikes } = require("./../Controllers/BookController")

router.post("/", PostBook)

router.get("/:userId", FollowingBooks)

router.put("/:bookId/like", LikeBook)

router.get("/:bookId/likes", BookLikes)

module.exports = router