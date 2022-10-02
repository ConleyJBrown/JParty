const router = require('express').Router()

const games = [];
const game1 = {
    title: "Game 1",
    author: "Conley",
    categories: [],
    clues: [],
    responses: []
}
const game2 = {
    title: "Game 2",
    author: "Conley",
    categories:[],
    clues: [],
    responses: []
}

game1.clues = 
["1 + 1 = ?", "2+2 = ?","3+3 = ?", "4 + 4 =?", "5+5 = ?",
"The capital of Spain", "The Capital of Russia", "The Capital of China", "The Capital of Poland", "The Capital of Montenegro",
"The first president of the US", "The president during the US Civil War", "The president on the $20 bill", "The president who signed NAFTA into law", "The president who promised to build a wall",
"The color of an orange", "The color of the sky", "The color of a cloud", "The color of grass", "The color of a banana",
"The group that sang 'Hey Jude'", "The band that sang 'Satisfaction'", "He sang 'What a Wonderful World", "She sang 'Oops, I did it again'", "He played the Goblin King in the movie 'Labyrinth'",
"The Big Bad this animal ate Little Red Riding Hood", "He is Gretel's Brother", "The Brothers with this last name collected and published fairy tales", "A man made of this ran as fast as he could", "She tumbled down the hill with Jack"
]
game1.responses = 
["2", "4", "6", "8", "10",
"Madrid", "Moscow", "Beijing", "Warsaw", "Podgorica",
"Washington", "Lincoln", "Jackson", "Clinton", "Trump",
"orange", "blue", "white", "green", "yellow",
"the beatles", "the rolling stones", "louis armstrong", "britney spears", "david bowie",
"wolf", "Hansel", "Grimm", "Gingerbread", "Jill"
]
game1.categories = ["Math", "World Capitals", "US Presidents", "Colors", "Music", "Fairy Tales"]
games.push(game1)
games.push(game2)


//Games Index
router.get('/', (req,res)=>{
    res.send(JSON.stringify(games));
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
    let id = req.params.id
    res.send(games[id])
});

//Edit Game
router.get('/:id/edit', (req,res)=>{
    res.send("This will display the page for editing a game")
});

router.put('/:id', (req,res)=>{
    res.send("This route will update a game in the database!")
});

router.delete('/:id/', (req,res)=>{
    res.send("This route will delete a game from the database")
});




module.exports = router
