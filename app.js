const http =require("http")
const fs = require("fs");
const url=require("url");
const server = http.createServer((req, res)=>{
    const procedur1=url.parse(req.url,true);
    const {name , email}=procedur1.query;
    console.log(name,email);

    switch(req.url){
        case "/":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end("<h1> Welcome to Home Page </h1>");
            break;
        case "/about":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(`<h1> Welcome to About Page i am ${name} and my email is ${email} </h1>`);
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1> 404 Page Not Found </h1>");        
    }
})
server.listen(8000, ()=>{
    const logdata= `[${new Date().toLocaleString()}] Server started on port 8000`;
    require("./logger").logActivity(logdata);
    fs.appendFile("activity2.log", `${logdata}\n`, (err) => {
        if (err) console.log(err);
      });
    console.log("Server is running on port 8000");
})