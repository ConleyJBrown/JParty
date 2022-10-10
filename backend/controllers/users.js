const router = require("express").Router()
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'conleybrown',
    host: 'localhost',
    database: 'jparty',
    password: 'password',
    port: 5432,
  })

const getAllUsers = async (request, response) => {
    pool.query('SELECT * FROM users ', (error, results) => {
      if (error) {
        throw error
      }
      console.log("GET ALL USERS FUNCTION CALLED")
      console.log(results.rows)
      response.status(200).json(results.rows)
    })
  }

  const getUserByName = async (request, response) =>{
    const { username } = request.params
    console.log("GET USER BY NAME FUNCTION CALLED")
    const sendBack=  await new Promise((res, rej) => {
        pool.query(`SELECT * FROM users WHERE username='${username}'`, (error, results) => {
            if(error){
                return rej(error)
            }
            res(results.rows)
        })
    })
    console.log(sendBack)
    response.status(200).send(sendBack)
  }

  const createNewUser = async (request, response) => {
        console.log("POST REQUEST TO USERS RECIEVED")
        const newUserData = request.body

        const sendBack=  await new Promise((res, rej) => {
            pool.query(`INSERT INTO users (username,password,email) VALUES ('${newUserData.username}', '${newUserData.password}', '${newUserData.email}') RETURNING *`, (error, results) => {
                if(error){
                    return rej(error)
                }
                res(results.rows)
            })
        })

        response.status(201).send(sendBack)

  }




router.get('/', getAllUsers);

router.post('/', createNewUser)

router.get('/:username', getUserByName)



module.exports = router;