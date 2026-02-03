//ASYNC CODE
const fs=require('fs');
//fs.writeFileSync("./ds-b.txt","Hello Everyone")
//fs.writeFileSync("./abes.txt","Hi ABES College students")
 //const result=fs.readFileSync("./abes.txt","utf-8");
//console.log(result);
//const result=fs.readFileSync("./ds-b.txt","utf-8");
//console.log(result);


//ASYNC CODE
fs.appendFileSync("./abes.txt","phD");
fs.appendFileSync("./abes.txt",`Gargi`,()=>{});
