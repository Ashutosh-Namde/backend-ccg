const { log } = require("console")
const express = require("express")
const app = express()
const fs = require('fs')
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/create",(req,res)=>{
    
    const {fileName,fileData} = req.body

   const  filePath = "./uploads/"   + fileName

    fs.writeFile(filePath,fileData,(err)=>{
        if(err){
            console.log(err);
            res.send("error in create")
            
        }else(
            res.send("file created")
        )
    })
})

app.get("/read/:fileName" , (req,res)=>{

   const filePath = "./uploads/" + req.params.fileName
console.log(filePath);

    fs.readFile(filePath,{encoding:"utf-8"} ,(err,data)=>{
        if(err){
            console.log(err);
            res.send("error in reading")
            
        }
        else{
            res.send(data)
            console.log(data);
            
        }
    })
})

app.patch("/update/:fileName" , (req,res)=>{

    const filePath = "./uploads/" + req.params.fileName
    const {fileData } = req.body
    fs.writeFile(filePath , fileData , (err)=>{
        if(err){
            console.log(err);
            res.send("error in uploads")
            
        }
        else{
            res.send("file updated")
            console.log("error in update");
            

        }
    })
})

app.delete("/delete/:fileName" , (req,res)=>{

   const filePath = "./uploads/" + req.params.fileName 
    fs.unlink(filePath , (err)=>{
        if(err){
            console.log(err);
            res.send("err in delete")
            
        }
        else{
            res.send("file deleted")
        }
    })
})

app.get("/get-all", (req,res)=>{

    const filePath = "./uploads/"
    fs.readdir(filePath,(err,data)=>{
        if(err){
            console.log(err);
            res.send("error  in get all")
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000)