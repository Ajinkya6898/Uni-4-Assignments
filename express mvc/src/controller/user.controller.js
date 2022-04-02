const express = require("express");

const router=express.Router();

const User=require("../model/usermodel")

router.get("",async(req,res)=>{
    try{
        const user=await User.find({}).lean().exec();
        res.status(201).send(user);
    
    }catch(err){
        console.log(err);
        res.status(500).send({message:err.massage});
    }
});

router.post("",async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message:err.message});
    }
})

module.exports=router;