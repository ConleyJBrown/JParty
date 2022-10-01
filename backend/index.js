//require express and dotenv
const express = require("express");
const app = express();
require('dotenv').config();


//home page GET route
app.get("/", (req,res) =>{
    res.send("This is the homepage for JParty!");
});

app.get('/play', (req,res)=>{
    res.send("This is where you play a game!");
});

app.get('*', (req,res)=>  {
    res.send("Error:404!");
});


//listen
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err)
    }
    else{
    console.log(`Listening on port ${process.env.PORT}`)
    }
});

