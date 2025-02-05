//express server ko config karo

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("hello")
})


module.exports = app