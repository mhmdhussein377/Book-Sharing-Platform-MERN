const express = require("express")
const router = express.Router()
const { PostBook, FollowingBooks, LikeBook } = require("./../Controllers/BookController")

router.post("/", PostBook)

router.get("/:userId", FollowingBooks)

router.put("/:bookId/like", LikeBook)

module.exports = router