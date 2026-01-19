const http=require("http")
const url=require("url");

const fs=require("fs");
const port=5100;

const server=http.createServer((req,res) => {
    const parseurl=url.parse(req.url,true);
    const {name,issue,priority}=parseurl.query;

    if(parseurl.pathname === "/complain"){
        const ticketid = "TKT-" + Math.floor(Math.random() * 10000);
        const logdata = `Name: ${name}, Issue: ${issue}, Priority: ${priority}, Ticket: ${ticketid}\n`;

        if(priority === "high"){
            fs.appendFile("urgent.txt",logdata,(error) => {
                if(error){
                    console.log("error",error);
                } 
            })

        } else{
            fs.appendFile("normalcomplain.txt",logdata,(error) => {
                if(error){
                    console.log("error",error);
                }
            })
        }
    
    res.writeHead(200,{"content-type":"text/html"});
    res.end(`
        <html>
        <head>
        <title>Ticket generator</title>
        </head>
        <body>
        <h3><strong>Name:</strong>${name}</h3>
        <h3><strong>issue:</strong>${issue}</h3>
        <h3><strong>priority:</strong>${priority}</h3>
        <h3><strong>ticketid:</strong>${ticketid}</h3>
        </body>

        </html>
        `

    )

    } else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.end(`<h1>We will solve your issue soon.</h1>`)
    }
})
server.listen(port, (error) => {
    if(error){
        console.log("error occures",error.message);
    } else{
        console.log(`server is running in port on ${port}`);
    }
})