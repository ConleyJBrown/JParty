//require express and dotenv
const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());

//routers
app.use('/games', require('./controllers/games'));
app.use('/users', require('./controllers/users'));

//home page GET route
app.get("/", (req,res) =>{
    res.send("This is the homepage for JParty!");
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

