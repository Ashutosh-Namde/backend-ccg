const mongoose = require("mongoose")

function connect(){
    mongoose.connect('mongodb://0.0.0.0/n21')
    .then(()=>{
        console.log("connected to db");
        
    })
    .catch(err=>{
        console.log("error to connect db" , err);
        
    })
}

module.exports = connect