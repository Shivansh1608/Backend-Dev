const os =require("os");
const fs=require("fs");

const totalmemory=os.totalmem()/(1024*1024*1024);
const freememory=os.freemem()/(1024*1024*1024);

const platform=os.platform();
const cpu=os.cpus()[0].model;

const data=`"totalmemoery:" ${totalmemory},
"freememory:"${freememory},
"platform:" ${platform},"
cpu:"${cpu}`;

setInterval(() => {
    fs.appendFile("req.txt",data,(err) => {
    if(err){
        console.log(err)
    }
    console.log("Succesfully");
})
},5000);
