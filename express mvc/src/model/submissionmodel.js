const mongoose = require("mongoose");

const SubmissionSchema = ({
    evaluation_id:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation",required:true},
    student_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    marks:{type:Number,required:true},
});

const Submission=mongoose.model("submission",SubmissionSchema);

module.exports=Submission;
