import React from 'react';
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
    const score = 0;
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
                Let's Play J-Party! Game Number: {id}
            </h1>
            <br></br>
            { !store.getState().displayClue.value &&
             <Container>
                <Row>
                    {data.categories &&
                        data.categories.map((category, index) => {
                            return (
                                <GameColumn category={category} data={data} index={index}/>
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
                <h2>Player Score: {score}</h2>
            </div>
            </>
        )
}