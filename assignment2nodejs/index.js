

const http=require('http');
const fs=require('fs');
const home=fs.readFileSync("./assignment2.html");
const myserver=http.createServer((req,res)=>{
    res.end(home);
})
myserver.listen(8001,()=>console.log("server is running on port 8001"));