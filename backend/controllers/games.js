const router = require('express').Router()
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'conleybrown',
  host: 'localhost',
  database: 'jparty',
  password: 'password',
  port: 5432,
})


//insert a row into the games table
async function insertGame(title, author_id, author_name){
    return await new Promise((res, rej) => {
        pool.query(`INSERT INTO games (title,author_id, author_name) VALUES ('${title}', ${author_id}, '${author_name}') RETURNING *`, (error, results) => {
            if(error){
                return rej(error)
            }
            res(results.rows)
        })
    })
}

//insert a row into the categories table
async function insertCategory(title, game_id){
    return await new Promise((res, rej) => {
        pool.query(`INSERT INTO categories (title,game_id) VALUES ('${title}', ${game_id}) RETURNING *`, (error, results) => {
            if(error){
                return rej(error)
            }
            res(results.rows)
        })
    })
}

//insert a row into the clues table
async function insertClue(question, answer, cat_id){
    return await new Promise((res, rej) => {
        pool.query(`INSERT INTO clues (question, answer ,cat_id) VALUES ('${question}', '${answer}', ${cat_id}) RETURNING *`, (error, results) => {
            if(error){
                return rej(error)
            }
            res(results.rows)
        })
    })
}

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

 //return a user given the user_id
 async function getUserByName(username){
    return await new Promise ((res, rej) => {
         pool.query(`SELECT * FROM users WHERE username='${username}'`, (error, results) => {
         if (error) {
             return  rej(error)
         }
         console.log("GET USER BY NAME FUNCTION CALLED")
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
  }

  //this method is called when a POST request is made to /games,
  //and it adds a new game to the database
  const addGame = async (request, response) =>{
        const gameToAdd = request.body
        console.log(gameToAdd)
        console.log(gameToAdd.author)
        const author = await getUserByName(gameToAdd.author)
        console.log(author[0].user_id)

        //insert row into the games table
        const gameInserted = await insertGame(gameToAdd.title, author[0].user_id, gameToAdd.author)
        const gameInsertedID = gameInserted[0].game_id
        console.log("GAME INSERTED INTO TABLE! GAME ID: ")
        console.log(gameInsertedID)

        //insert rows into the categories table
        for(let i = 0; i < 6; i++){
            const categoryInserted = await insertCategory(gameToAdd.categories[i], gameInsertedID)
            const categoryInsertedID = categoryInserted[0].cat_id
            console.log("CATEGORY INSERTED INTO TABLE! CAT ID")
            console.log(categoryInsertedID)
            //insert clues into the clue table
            for(let j = i*5; j < (i*5)+5; j++){
                const clueInserted = await insertClue(gameToAdd.clues[j], gameToAdd.responses[j], categoryInsertedID)
                const clueInsertedID = clueInserted[0].clue_id
                console.log("CLUE INSERTED INTO TABLE! CLUE ID:")
                console.log (clueInsertedID)
            }
        }
        //response.status(201)
  }





//Games Index
router.get('/', getAllGames);

//Create Game
router.post('/', addGame);

//New Game Form
router.get('/new', (req,res)=>{
    res.send("This will display the page for creating a new game!");
});

//Play Game
router.get('/:id', playGame);

//Edit Game
router.get('/edit/:id', playGame);

router.put('/:id', (req,res)=>{
    res.send("This route will update a game in the database!")
});

router.delete('/:id/', (req,res)=>{
    res.send("This route will delete a game from the database")
});




module.exports = router;
