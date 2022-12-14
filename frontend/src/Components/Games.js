import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

export default function Games () {
    const [data, setData] = useState([]) 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:9000/games')
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    return(
        <>
        <h1>
            Games
        </h1>
        <h2>
            Click on a game to play!
        </h2>
        <div>
            <ul>
                {data.map((game,index) =>{
                return(
                
                 <Link className ="GameLink"key ={game.game_id}to ={`/games/${game.game_id}`}>
                    <li>{game.title} by {game.author_name}</li>
                 </Link>
                )
           
                })}
            </ul>
            <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
        </div>
        </>
    )
}