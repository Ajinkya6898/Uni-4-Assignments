const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
     return mongoose.connect(
       " mongodb://127.0.0.1:27017/assignments");
   };


   app.get("/book", async (req, res) => {
     try {
         const book = await Book.find({}).lean().exec();
         res.status(201).send({ "books": book })
     } catch (err) {
         console.log(err);
         res.status(500).send(err);
     }
 });
 
 app.post("/book", async (req, res) => {
     try {
         const book = await Book.create(req.body);
         res.status(201).send({ "books": book })
     } catch (err) {
         console.log(err);
         res.status(500).send(err);
     }
 })

 
   app.get("/sections/:sections_id/book",async(req,res)=>{

     try{
         const book=await Book.find({sections_id:req.params.sections_id}).lean().exec();
         res.status(201).send({"books":book})
     }catch(err){
         console.log(err);
         res.status(500).send(err);
     }
 });

// find all books written by an author

const allBooksSchema = new mongoose.Schema({
     bookName: {type:String, required:true},
     authorName: {type:String, required:true},

     author_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "author",
          required: true,
      },
      section_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "sections",
          required: true,
      },
})

const Book = mongoose.model("/book", allBooksSchema);

const authorSchema = mongoose.Schema({

     first_name: { type: String, required: true },
     last_name: { type: String, required: true }
 });
 
 const Author = mongoose.model("/author", authorSchema);

 app.listen(5000, async function (req, res) {
     try {
         await connectDB();
         console.log("listning at port 5000")
     } catch (err) {
         console.log("err:", err);
     }
 
 })
