const express = require("express")
const fs = require('fs')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/create",(req , res)=>{
  
    const {fileName , fileData} = req.body

    const filePath = "./uploads/" + fileName
    
    fs.writeFile(filePath,fileData, (err)=>{
        if(err){
            console.log(err);
            res.send("error is comming create")
            
        }
        else{
            res.send("file created")
        
        }

    })

})

app.get("/read/:fileName",(req,res)=>{
    const filePath = "./uploads/"+  req.params.fileName

    fs.readFile(filePath,{
        encoding:"utf-8"
    },(err,data)=>{
        if(err){
            console.log(err);
            res.send("error in reading")
            
            
        }
        else{
          
            console.log(data);
            res.send(data)
            
        }
    })
})

app.patch("/update/:fileName",(req,res)=>{
    const {fileData} = req.body
    const fileName = req.params.fileName
    const filePath = "./uploads/"+fileName
 

    fs.writeFile(filePath,fileData,(err)=>{
        if(err){
            console.log(err);
            res.send("file not updated")
        }
        else{
            res.send("file updated")
        }
    })
})

app.delete("/delete/:fileName",(req,res)=>{

    const fileName = req.params.fileName
    const filePath = "./uploads/" + fileName

    fs.unlink(filePath,(err)=>{
        if(err){
            console.log(err);
            res.send("file not deleted")
        }
        else{
            res.send("file deleted")
        }
    })
})

app.get("/get-all" ,(req,res)=>{

    const filePath = "./uploads/"
    fs.readdir(filePath,(err , file)=>{
         if(err){
            console.log(err);
            res.send("error in get all")
            
         }
         else{
            res.send(file)
            console.log(file);
            
         }
    })
})

app.listen(3000)