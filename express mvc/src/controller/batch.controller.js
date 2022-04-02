const express = require("express");

const router=express.Router();

const Batch=require("../model/batchmodel")

router.get("",async(req,res)=>{
    try{
        const batch=await Batch.find({}).lean().exec();
        res.status(201).send(batch);
    
    }catch(err){
        console.log(err);
        res.status(500).send({message:err.massage});
    }
})


router.post("",async(req,res)=>{
    try{
        const batch=await Batch.create(req.body);
        res.status(200).send(batch);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message:err.message});
    }
})

module.exports=router;