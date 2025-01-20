const express = require("express")

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.body)
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.get("/profile",(req,res)=>{
    res.send("profile page")
})

app.get("/contact",(req,res)=>{
    res.send("contact page")
})

app.listen(3000)