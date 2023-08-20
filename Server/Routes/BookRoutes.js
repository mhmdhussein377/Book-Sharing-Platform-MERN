const express = require("express")
const router = express.Router()
const { PostBook, FollowingBooks, LikeBook, BookLikes, SearchBooks } = require("./../Controllers/BookController")
const verify = require("./../verifyToken")

router.post("/", verify, PostBook)

router.get("/", verify, FollowingBooks)

router.put("/:bookId/like", verify, LikeBook)

router.get("/:bookId/likes", verify, BookLikes)

router.get("/search/:searchTerm", verify, SearchBooks)

module.exports = router