//server ko start krna 
//db ko connect krna 

const app = require('./src/app.js')
const connect = require('./src/db/db')

connect()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})