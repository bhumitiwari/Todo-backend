const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/sample",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection successful");
}).catch((e)=>{console.log("unsuccessful")})

