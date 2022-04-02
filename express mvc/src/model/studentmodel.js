const mongoose=require("mongoose");

const StudentSchema=mongoose.Schema({
    rool:{type:Number,required:true},
    id:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    current_batch:{type:mongoose.Types.ObjectId,ref:"batch",required:true},
},
{
    timestamp:true,
});

const Student=mongoose.model("student",StudentSchema);

module.exports=Student;