const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://127.0.0.1:27017/n12')
    .then(()=>{
        console.log("database connected");
        
    })
    .catch(err=>{
        console.log("error to connect db " , err);
        
    })
}

module.exports = connect
