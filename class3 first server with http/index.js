var http = require('http')

var app =  http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("home page")
    }
    if(req.url == "/about"){
        res.end("about page")
    }
    if(req.url == "/profile"){
        res.end("profile page")
    }
})


app.listen(3000)