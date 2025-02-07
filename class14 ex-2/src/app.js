//server ko config krna

const express = require('express')

const app = express()

const model = require('./models/user.model')

app.use(express.json())

app.set('view engine' , 'ejs')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    
    res.render('index')
})

app.post('/create', async (req,res)=>{
    const {username,email,imageurl} = req.body

    console.log(username,email,imageurl);
    
    try{
        const user  = await model.create({
            username:username,
            email:email,
            imageurl:imageurl
        })
       res.redirect("/feed")
    
}
catch (err){
    console.log("error in creating user" , err);
    res.send(err)
    
}
})

app.get('/feed',async(req,res)=>{

    const user = await model.find()

   res.render("feed",{user:user})
     
 })

module.exports = app