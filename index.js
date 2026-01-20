// //const {add,remove,area}=require("./Math.js");
// const math=require("./Math.js");
// //console.log(add(1,2),remove(9,8),area(3));
// console.log(math.add(1,2));
// console.log(math.remove(4,2));
// console.log(math.area(5));


const fs=require("fs");
fs.writeFileSync("./text.txt","This is sync file content");
fs.readFile("text.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error in file",err);
    } else{
        console.log("Data is there : ",data);
    }
});
//console.log(async);
//console.log(file);


