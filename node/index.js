//ASYNC CODE
const fs=require('fs');
//fs.writeFileSync("./ds-b.txt","Hello Everyone")
//fs.writeFileSync("./abes.txt","Hi ABES College students")
 //const result=fs.readFileSync("./abes.txt","utf-8");
//console.log(result);
//const result=fs.readFileSync("./ds-b.txt","utf-8");
//console.log(result);


//ASYNC CODE

////fs.appendFileSync("./abes.txt",PhD);

//APPEND in async
//fs.appendFile("./abes.txt",` Gargi`,()=>{ });

//COPY in sync
//fs.cpSync("./abes.txt","./a2.txt")
//DELETE SYNC

//fs.unlinkSync("./ds-b.txt")
//DELETE ASYNC

fs.unlink("./abes.txt",(err)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log("Data Deleted");
    }
});