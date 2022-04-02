const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    dateofBirth:{type:String,required:true},
    type:{type:String,enum : ["student","admin","instructor"],required:true},
},
{
    timestamp:true,
});

const User=mongoose.model("user",UserSchema);

module.exports=User;
