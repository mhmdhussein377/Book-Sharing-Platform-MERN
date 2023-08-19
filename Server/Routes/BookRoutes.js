const express = require("express")
const router = express.Router()
const { PostBook } = require("./../Controllers/BookController")

router.post("/", PostBook)

module.exports = router