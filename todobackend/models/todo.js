const mongoose=require("mongoose");


const todo=new mongoose.Schema({
title:{
    type:String,
    required:true
},
desc:{type:String,
    
},
bydate:{
type:Date,
required:true
}

},{timestamps:true

})
module.exports=mongoose.model("Todo",todo);