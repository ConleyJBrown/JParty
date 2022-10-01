const router = require('express').Router()

//Games Index
router.get('/', (req,res)=>{
    res.send("The games index page!");
});

//Create Game
router.post('/', (req,res)=>{
    res.send("This route will add a new game to the database!");
});

//New Game Form
router.get('/new', (req,res)=>{
    res.send("This will display the page for creating a new game!");
});

//Play Game
router.get('/:id', (req,res)=>{
    res.send("This route is where we'll play a game!")
});

//Edit Game
router.get('/:id/edit', (req,res)=>{
    res.send("This will display the page for editing a game")
});

router.patch('/:id', (req,res)=>{
    res.send("This route will update a game in the database!")
});

router.delete('/:id/', (req,res)=>{
    res.send("This route will delete a game from the database")
});




module.exports = router
