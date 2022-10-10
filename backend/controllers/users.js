const router = require("express").Router()


router.get('/', (req, res) => {
    res.send("the users index page")
});



module.exports = router;