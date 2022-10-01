//require express and dotenv
const express = require("express");
const app = express();
require('dotenv').config();


//routers
app.use('/play', require('./controllers/play'))
//home page GET route
app.get("/", (req,res) =>{
    res.send("This is the homepage for JParty!");
});

app.get('/play', (req,res)=>{
    res.send("This is where you play a game!");
});

app.get('*', (req,res)=>  {
    res.status(404).send("Error:404!");
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

