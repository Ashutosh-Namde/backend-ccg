const express = require("express")
const { registerViewController, registerController, loginViewController, loginController, profileController, feedViewController } = require("../controllers/user.controller")
const router = express.Router()
const middleware = require("../middleware/user.middleware")

router.get("/register" , registerViewController)


router.post("/register" , registerController)

router.get("/login" , loginViewController )

router.post("/login", loginController)

router.get("/profile",middleware.authUser,profileController)



module.exports = router
