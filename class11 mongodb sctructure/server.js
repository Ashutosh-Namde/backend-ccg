// server start krna 
// db se connect krna

const app = require('./src/app')
const connect = require('./src/db/db')

connect()


app.listen(3000, ()=>{
    console.log("server running on port 3000");
    
})