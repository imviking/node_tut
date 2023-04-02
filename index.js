const http =require('http')
const colors = require("colors"
)
const port =8080
http.createServer((req,res)=>{
    console.log("server listening on ",port)
    res.write('<h1> hello this is the server</h1>')
    res.end()
    
}).listen(port)