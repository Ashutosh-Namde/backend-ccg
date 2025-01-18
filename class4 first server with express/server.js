// const { log } = require("console")
var express = require('express')

var app = express()

app.get("/",(req,res)=>{
     res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("*",(req,res)=>{
    res.send("404 error")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})