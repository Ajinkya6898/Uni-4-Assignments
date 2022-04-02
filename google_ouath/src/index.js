const express = require("express");

const connect = require("./configs/db");

const {register,login, generateToken} = require("./controllers/auth.controller")

const GoogleStrategy = require("passport-google-oauth20")

const app = express();

const passport = require("./configs/google-oauth")

app.use(express.json());

app.post("/register", register)

app.post("/login", login)

 app.get('/auth/google',
  passport.authenticate('google',{scope: ['public,email']}));
 
  app.get('/auth/google/callback',
  //passport.authenticate('google', { failureRedirect: '/login' , session:false}),
  passport.authenticate('google',  {scope: 'https://www.googleapis.com/auth/plus.login', session:false} ),
  function(req, res) {
     
    res.redirect('http://127.0.0.1:5500/Authorisation_Oauth/index.html');
     
  });

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});