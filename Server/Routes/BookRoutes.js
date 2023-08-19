const express = require("express")
const router = express.Router()
const { PostBook, FollowingBooks, LikeBook, BookLikes, SearchBooks } = require("./../Controllers/BookController")

router.post("/", PostBook)

router.get("/:userId", FollowingBooks)

router.put("/:bookId/like", LikeBook)

router.get("/:bookId/likes", BookLikes)

router.get("/search/:searchTerm", SearchBooks)

module.exports = router