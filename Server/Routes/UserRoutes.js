const express = require("express");
const router = express.Router();
const { FollowUser, UnfollowUser } = require("../Controllers/UserController");

router.put("/:id/follow", FollowUser);

router.put("/:id/unfollow", UnfollowUser)

module.exports = router