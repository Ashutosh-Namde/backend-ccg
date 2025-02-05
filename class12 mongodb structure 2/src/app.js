//server ko config krna

const express = require('express')

const app  = express()

const userModel = require("./models/user.model")

app.use(express.json())

app.post('/create',async(req,res)=>{
    const {username , email , password} = req.body

    console.log(username,email,password);
    

 const user = await   userModel.create({
        username:username,
        email:email,
        password:password
    })

    res.send(user)
})

module.exports = app