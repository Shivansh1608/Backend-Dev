const http=require("http");
const fs=require("fs");
const url=require("url");
const port=8000;

const server=http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type" : "application/json"});
//    const data ={
//         name:"shivansh",
//         year:3,
//         city:"Banda"
// }
//     res.send(JSON.stringify(data));

    


        switch(req.url){
            case "/" :
                res.writeHead   (200,{"content-type":"text/html"});
                res.end("<h1> Welome to page </h1>");
                break;

              case "/about" :
                res.writeHead   (200,{"content-type":"text/html"});
                res.end("<h1> Welome to about page </h1>");
                break;

             default:
                res.writeHead   (404,{"content-type":"text/html"});
                res.end("<h1> page not found </h1>");
                break;

        }



})

server.listen(port, () => {
       const logData = `[${new Date().toString()}] Server started on port ${port}\n`;

    fs.appendFile("active.log", logData, (err) => {
        if (err) {
            console.log("Failed to write log");
        }
    });

    console.log(`server is running on ${port}`);
})

