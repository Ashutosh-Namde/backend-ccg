const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    media:{
        type:String
    },
    caption:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const  postModel =mongoose.model("post",postSchema)

module.exports = postModel