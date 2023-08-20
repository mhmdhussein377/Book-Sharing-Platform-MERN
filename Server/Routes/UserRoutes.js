const express = require("express");
const router = express.Router();
const { FollowUser, UnfollowUser } = require("../Controllers/UserController");
const verify = require("./../verifyToken")

router.put("/:id/follow", verify, FollowUser);

router.put("/:id/unfollow", verify, UnfollowUser)

module.exports = router