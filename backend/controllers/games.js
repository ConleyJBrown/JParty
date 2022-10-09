const router = require('express').Router()
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'conleybrown',
  host: 'localhost',
  database: 'jparty',
  password: 'password',
  port: 5432,
})

//gets all games from the database
const getAllGames = async (request, response) => {
    pool.query('SELECT * FROM games ORDER BY game_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log("GET GAMES FUNCTION CALLED")
      console.log(results.rows)
      response.status(200).json(results.rows)
    })
  }

     //returns a single game, given its ID
     async function getOneGame(gameID){
        return await new Promise ((res, rej) => {
             pool.query(`SELECT * FROM games WHERE game_id=${gameID}`, (error, results) => {
             if (error) {
                 return  rej(error)
             }
             console.log("GET ONE GAME FUNCTION CALLED")
             console.log(results.rows)
             res(results.rows)
         }) 
       })
     }

    //return all categories of a particular game
    async function getCategoriesOfGame(gameID){
        return await new Promise ((res, rej) => {
             pool.query(`SELECT * FROM categories WHERE game_id=${gameID}`, (error, results) => {
             if (error) {
                 return  rej(error)
             }
             console.log("GET CATEGORIES FUNCTION CALLED")
             console.log(results.rows)
             res(results.rows)
         }) 
       })
     }
     

  //return all clues of a particular category
  async function getCluesOfCategory(catID){
    return await new Promise ((res, rej) => {
         pool.query(`SELECT * FROM clues WHERE cat_id=${catID}`, (error, results) => {
         if (error) {
             return  rej(error)
         }
         console.log("GET CLUES FUNCTION CALLED")
         console.log(results.rows)
         res(results.rows)
     }) 
   })
 }

   //return a user given the user_id
   async function getOneUser(userID){
    return await new Promise ((res, rej) => {
         pool.query(`SELECT * FROM users WHERE user_id=${userID}`, (error, results) => {
         if (error) {
             return  rej(error)
         }
         console.log("GET USER FUNCTION CALLED")
         console.log(results.rows)
         res(results.rows)
     }) 
   })
 }

 //this function is called when get request is made to /games/:id, 
 //and it returns the game data required for the front end to 
 //display a game for the user to play
  const playGame = async (request ,response) =>{
    const { id } = request.params
    console.log("GAME ID is " + id)

    //the data structure that will describe the game and be returned to the front end
    const gameToPlay = {
        title: "",
        author: "",
        categories: [],
        clues: [],
        responses: []
    }

    //get the game from the db and put its title in the data structure to be returned
    const game = await getOneGame(id)
    gameToPlay.title = game[0].title

    //get the author of the game and put it into the data structure
    const author = await getOneUser(game[0].author_id)
    gameToPlay.author = author[0].username

    //fetch all the categories for this game from the db
    const categories = await getCategoriesOfGame(id)

    for(const category of categories){
        gameToPlay.categories.push(category.title)
        console.log("catID is: " + category.cat_id)
        const clues = await getCluesOfCategory(category.cat_id)
        for(const clue of clues){
            gameToPlay.clues.push(clue.question)
            gameToPlay.responses.push(clue.answer)
        }
    }
    

    console.log(gameToPlay)
    
    response.status(200).send(gameToPlay)
    

    //  pool.query(`SELECT * FROM games WHERE game_id='${id}'`, (error, results) => {
    //     if (error) {
    //       throw error
    //     } 
    //     gameToPlay.title =results.rows[0].title   
    //   })

    // pool.query(`SELECT * FROM categories WHERE game_id='${id}'`, (error, results) => {
    //     if (error) {
    //       throw error
    //     }
    //     console.log("categories selected from table:")
    //     console.log(results.rows)
    //     results.rows.map((category) => {
    //         gameToPlay.categories.push(category.title)
    //     })

    //   })

    //   console.log(gameToPlay)
  }



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
router.get('/', getAllGames);

//Create Game
router.post('/', (req,res)=>{
    console.log(req.body)
    res.body = "SCOOBYDOOBYDOO"
    res.status(201);
});

//New Game Form
router.get('/new', (req,res)=>{
    res.send("This will display the page for creating a new game!");
});

//Play Game
router.get('/:id', playGame);

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
