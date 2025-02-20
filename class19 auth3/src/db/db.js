const mongoose = require("mongoose")

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/ex-auth4")
    .then(()=>{
        console.log("db connected");
        
    })
    .catch((err)=>{
        console.log("error in db connect", err);
        
    })
}

module.exports = connect