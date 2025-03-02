const express = require("express")
const router = express.Router()
const middleware = require("../middleware/user.middleware")
const { createPostViewController, createPostController, feedViewController } = require("../controllers/post.controller")

router.get("/create",middleware.authUser,createPostViewController)

router.post("/create",middleware.authUser,createPostController)

router.get("/feed" , middleware.authUser , feedViewController)

module.exports = router