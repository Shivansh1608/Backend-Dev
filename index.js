const express=require("express");
const app=express();


const student=[
    {id:1,name:"Shivansh",branch:"cse"},
    {id:2,name:"Aman",branch:"ese"},
    {id:3,name:"ravi",branch:"ml"},
    

]
app.get("/",(req,res)=>{
    res.send("Hello world");

})
app.get("/user",(req,res)=> {
    res.send("user page");
})

app.get("/student",(req,res)=>{
    res.json(student);
})

app.get("/student/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const result = student.find(s => s.id === id);

    if (!result) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(result);
});








app.listen(8000,(err)=>{
    if(err){
        console.log("error",err);
    }
    console.log(`server is running on port ${8000}`);
});