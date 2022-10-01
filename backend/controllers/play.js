const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("The /play index page!");
});

module.exports = router
