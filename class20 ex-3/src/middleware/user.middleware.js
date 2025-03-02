const jwt = require("jsonwebtoken")

module.exports.authUser=async(req,res,next)=>{
  try{
    const token = req.cookies.token

    const decode = jwt.verify(token,"node-secete-auth")
    req.user =  decode
    next()
  }
  catch{
    res.status(401).json({message:"user not resgister"})
  }
    
}