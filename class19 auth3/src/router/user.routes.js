const express = require("express")
const jwt = require("jsonwebtoken")
const { registerController, loginController, profileController } = require("../controller/controller")


const router = express.Router()

router.post("/register",registerController)
router.post("/login",loginController)
router.get("/profile",(req,res,next)=>{
    
try{
    const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token,"node n21 secrete key")
    req.user= decode
    next()

}
catch{
    return res.status(400).json({message:"invalid user"})
}
    
},profileController)

module.exports = router

