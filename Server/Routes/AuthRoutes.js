const express = require("express")
const router = express.Router()
import { Login } from "../Controllers/AuthController";

router.post("/login", Login)

// router.post("/register", )

module.exports = router;