// server config hoga

// const express = require('express')

// const app = express()

// const userModel = require('./models/user.model')

// app.use(express.json())

// app.post('/create' , async (req,res)=>{
//     const {username,email,password} = req.body

//     console.log(username,email,password);

//    const user = await userModel.create({
//         username,
//         password,
//         email
//     })

//     res.send(user)
    
// })



// module.exports = app

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

app.get('/feed',async(req,res)=>{

   const users = await userModel.findOne({
    email:"test@test.com"
   })
    console.log(users);
    res.send(users)
    
})

module.exports = app