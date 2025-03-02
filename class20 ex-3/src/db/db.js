const mongoose = require("mongoose")

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/ex-3")
    .then(()=>{
        console.log("DB connected");
        
    })
    .catch((err)=>{
        console.log("error to connect db " , err);
    })
}

module.exports = connect