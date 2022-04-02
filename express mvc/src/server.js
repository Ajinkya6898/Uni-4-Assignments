const app=require("./index");
const connect=require("./config/dbconnect");

app.listen(5000,async()=>{
    try{
        await connect();
        console.log('listning at port 5000');
    }catch(err){
        console.log(err);
    }
})