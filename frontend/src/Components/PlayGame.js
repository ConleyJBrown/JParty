import React from 'react';
import '../App.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameColumn from './GameColumn';
import ClueDisplay from './ClueDisplay';
import { useSelector, useDispatch } from 'react-redux'
import { setFalse, setTrue} from '../displayClueSlice'
import {store} from '../store'


export default function PlayGame () {
    const {id} = useParams();
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const displayClue = useSelector((state)=> state.displayClue)
    console.log(store.getState().displayClue.value)
    const score = useSelector(state => state.score.value)
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:9000/games/${id}`)
            console.log(response.body)
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    
 
        return(
            <>
            <h1>
                Let's Play J-Party!
            </h1>
            <h2>
                {data.title} by {data.author}
            </h2>
            <br></br>
            { !store.getState().displayClue.value &&
             <Container>
                <Row>
                    {data.categories &&
                        data.categories.map((category, index) => {
                            return (
                                <GameColumn className="GameColumn" key={`column${index}`}category={category} data={data} index={index}/>
                            )
                        })
                    }
                </Row>
             </Container>
            }
            {store.getState().displayClue.value &&
                <ClueDisplay/>
            }
             <div>
                <h2>Player Score: {useSelector(state => state.score.value)}</h2>
            </div>
            <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
            </>
        )
}