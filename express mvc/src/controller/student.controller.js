const express = require("express");

const router=express.Router();

const Student=require("../model/studentmodel")

router.get("",async(req,res)=>{
    try{
        const student=await Student.find({}).lean().exec();
        res.status(201).send(student);
    
    }catch(err){
        console.log(err);
        res.status(500).send({message:err.massage});
    }
})

router.post("",async(req,res)=>{
    try{
        const student=await Student.create(req.body);
        res.status(200).send(student);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message:err.message});
    }
})

module.exports=router;