const os=require("os");

const totalmemory=os.totalmem()/(1024*1024*1024);
const freememory=os.freemem()/(1024*1024*1024);

const platform=os.platform();
const cpu=os.cpus()[0].model;

console.log(cpu);

console.log(os.uptime()/3600);
console.log(os.userInfo());
