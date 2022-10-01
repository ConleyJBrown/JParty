const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("This is the /users GET page");
});

router.get('/new', (req, res)=>{
    res.send("The sign up page for a new user");
});

router.post('/', (req,res)=>{
    res.send("the route adds a new user to the database");
});

module.exports = router
