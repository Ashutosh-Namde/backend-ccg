const userModel = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.registerController =async (req,res)=>{
     const{username , email , password} = req.body

     const hashPassword = await bcrypt.hash(password,10)
    const user = await userModel.create({
        username,
        email,
        password:hashPassword
     })
     const token = jwt.sign({
        id:user._id,
        email:user.email
     },"node n21 secrete key")
     res.status(200).json({user,token})
     
}

module.exports.loginController = async(req,res)=>{
   const {email,password} = req.body

   const isUserExist =await userModel.findOne({email})
   if(!isUserExist){
    res.status(400).json({message:"user not register"})
   }
   const passwordMatch = await bcrypt.compare(password,isUserExist.password) 
   if(!passwordMatch){
    res.status(400).json({message:"pasword incorrect"})
   }

   const token = jwt.sign({
    id:isUserExist._id,
    email:isUserExist.email
   },"node n21 secrete key")

   res.status(200).json({user:isUserExist,token})
}

module.exports.profileController = async(req,res)=>{
   res.send(req.user)
    
    
    

}