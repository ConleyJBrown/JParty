import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import { store } from '../store';

export default function EditGames () {
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
            Your Games
        </h1>
        <h2>
            Choose a Game to Edit
        </h2>
        <div>
            <ul>
                {data.map((game,index) =>{
                if(game.author_name == store.getState().login.username && store.getState().login.loggedIn)return(
                
                 <Link className ="GameLink"key ={game.game_id}to ={`/games/edit/${game.game_id}`}>
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