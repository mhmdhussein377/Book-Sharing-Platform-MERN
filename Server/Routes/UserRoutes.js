const express = require("express");
const router = express.Router();
const { FollowUser } = require("../Controllers/UserController");

router.put("/:id/follow", FollowUser);

module.exports = router