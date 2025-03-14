const express = require('express')
const fs = require('fs')
var app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")

})

app.post("/create",(req,res)=>{
    const {fileName , fileData} = req.body

    const filePath = "./uploads/"+fileName
    
    fs.writeFile(filePath, fileData ,(err)=>{
        if(err){
            console.log(err);
            
        }
        else{
            res.send("file created")
        }
    })
    

})

app.get("/read/:fileName",(req,res)=>{

    const filePath = "./uploads/"+req.params.fileName

    fs.readFile(filePath,{
        encoding:"utf-8"
    }, (err,data)=>{
       if(err){
        console.log(err);
        
       }
       else{
        res.send(data)
       }
    })

})

app.listen(3000)