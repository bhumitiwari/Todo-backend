const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const mongoose=require("mongoose")
const { Schema } = mongoose;
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json())
const Todo=require("./models/todo")



const port=3000;
require("./connectdb")


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
app.post("/api/v1/todo/new",async(req,res)=>{
    const todo=await Todo.create(req.body);
    res.status(200).json({
        success:true,
        item:todo
    })

    
})
app.get("/api/v1/todo",async(req,res)=>{
  const todos=await Todo.find();
  res.status(200).json({
      success:true,
      todos
  })

  
})
app.get("/api/v1/get-todo-by-id",async(req,res)=>{
  const {id}=req.params.id;
const todo=await Todo.findById(id);
res.status(200).json({
success:true,
todo
})
})

app.delete("/api/v1/todo/delete",async(req,res)=>{
  const todos=await Todo.findOneAndDelete(req.body._id);
  
  res.status(200).json({
      success:true,
      
  })
  app.put("/api/v1/update-todo",async(req,res)=>{
    const {id}=req.params.id;
  const todo=await Todo.findByIdAndUpdate(id,{

  }
    
  );
  res.status(200).json({
  success:true,
  todo
  })
  })

  
})
