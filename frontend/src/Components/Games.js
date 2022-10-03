import { useEffect, useState } from 'react';

export default function Games () {
    const [data, setData] = useState([]) 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:9000/games')
            console.log(response)
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
                 <li key = {game.title}>
                    <a href={`/games/${index}`} className="GameLink">{game.title}</a>
                 </li>
                )
           
                })}
            </ul>
        </div>
        </>
    )
}