const mongoose=require("mongoose");

const EvaluationSchema=mongoose.Schema({
    date_of_evaluation:{type:String,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch",required:true},
});

const Evaluation=mongoose.model("evaluation",EvaluationSchema);

module.exports=Evaluation;
