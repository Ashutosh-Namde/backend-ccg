const express = require("express")
const userrouter = require("./routes/user.routes")
const cookieParser = require("cookie-parser")
const app = express()
const postRouter = require("./routes/post.routes")

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("view engine" , "ejs")
app.use("/user",userrouter)
app.use("/post",postRouter)

module.exports = app