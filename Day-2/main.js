const express = require ("express");

const app = express();

// app.use(logger);

app.get("/",function (req,res){
     res.send("Fetching all books")
});

app.listen(5000,()=>{
     console.log("listening on port 5000");
});

app.get("/books",function (req,res){
     res.send({Book1:"Rich Dad Poor Dad",Book2:"Automic Habit",Book3:"Attitude is Everything",Book4:" In Search of Lost Time",Book5:" War and Peace"})
});

// function logger(req,res,next){
//      console.log("log");
//      next();
// }