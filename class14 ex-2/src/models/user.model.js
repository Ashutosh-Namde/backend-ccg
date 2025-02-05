const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    imageurl:{
        type:String
    }
})

const usermodal = new mongoose.model("user", userSchema)

module.exports = usermodal