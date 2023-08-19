const express = require("express")
const router = express.Router()
const { PostBook, FollowingBooks } = require("./../Controllers/BookController")

router.post("/", PostBook)

router.get("/:userId", FollowingBooks)

module.exports = router