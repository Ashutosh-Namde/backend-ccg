//server ko config krna

const express = require('express')

const app = express()

const model = require('./models/user.model')

app.use(express.json())

app.post('/create', async (req,res)=>{
    const {username,email,imageurl} = req.body

    console.log(username,email,imageurl);
    
    
    const user  = await model.create({
        username:username,
        email:email,
        imageurl:imageurl
    })
   res.send(user)
})

app.get('/feed',async(req,res)=>{

    const users = await model.find()
     console.log(users);
     res.send(users)
     
 })

module.exports = app