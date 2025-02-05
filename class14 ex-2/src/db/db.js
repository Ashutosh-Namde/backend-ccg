const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/ex-2')
    .then(()=>{
       console.log("db connected");
       
    })
    .catch((err)=>{
        console.log("error in connect db" ,err);
        
    })
}

module.exports = connect