const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const postModel = require("../models/user.model")





module.exports.registerViewController =async (req,res)=>{
    res.render("register")
} 

module.exports.registerController = async(req,res)=>{
    const {username,email,profileImage,password} = req.body
    const hashPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        profileImage,
        password:hashPassword
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email
    } , "node-secete-auth")

    res.status(200).json({user,token})
}

module.exports.loginViewController = (req,res)=>{
    res.render("login")
}

module.exports.loginController =async (req,res)=>{

    const {email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        res.status(401).json({message:"Invalid email"})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        res.status(401).json({message:"Invalid password "})
    }

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },"node-secete-auth")

    res.cookie("token",token)
    

    res.status(201).json({user,token,message:"login"})
}

module.exports.profileController = async(req,res)=>{
    res.send("profile page")
}

