const mongoose=require("mongoose");

const BatchSchema=mongoose.Schema({
    batch_name:{type:String,required:true},
},
{
    timestamp:true,
});

const Batch=mongoose.model("batch",BatchSchema);

module.exports=Batch;
