const express=require("express");
const app=express();


const student=[
    {id:1,name:"Shivansh",branch:"cse",state:"up"},
    {id:2,name:"Aman",branch:"ese"},
    {id:3,name:"ravi",branch:"ml"},
    

]
app.get("/",(req,res)=>{
    res.send("Hello world");

})
app.get("/user",(req,res)=> {
    res.send("user page");
})

app.get("/student", (req, res) => {
    const branch = req.query.branch;

    const foundStudent = student.filter(s => s.branch === branch);

    res.json(foundStudent);
});


app.get("/student/:id", (req, res) => {
    const id = Number(req.params.id);

    const studentResult = student.find(s => s.id === id);

    if (!studentResult) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(studentResult);
});

app.post("/student/register",(req,res)=>{
    const data=req.body;
    console.log("<<<",req.body);
    if(!data){
        return req.status(404).send("user not found!");
    }
    res.json(data);
})

app.listen(8000,(err)=>{
    if(err){
        console.log("error",err);
    }
    console.log(`server is running on port ${8000}`);
});