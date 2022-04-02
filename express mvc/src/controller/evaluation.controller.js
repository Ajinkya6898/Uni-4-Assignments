const express = require("express");

const router = express.Router();

const Evaluation = require("../model/evaluationmodel");
const Submission=require("../model/submissionmodel");
const Student=require("../model/studentmodel");

router.get("", async (req, res) => {
  try {
    const evaluation = await Evaluation.find({}).lean().exec();
    res.status(201).send(evaluation);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.massage });
  }
});

router.post("", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    res.status(200).send(evaluation);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id/submission", async (req, res) => {
  try {
    const submission = await Submission.find({id:req.params.id}).lean().exec();
    res.status(200).send(submission);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
