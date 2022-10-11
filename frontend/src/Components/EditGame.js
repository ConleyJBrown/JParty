import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {store} from '../store'
import EditTitleForm from './EditTitleForm';
import UpdateColumnForm from './updateColumnForm';
import { setEditAuthor, setEditCategory, setEditTitle, setEditAnswer,setEditClue} from '../editGameSlice';

export default function EditGame () {
    const {id} = useParams();
    const [data, setData] = useState([]) 
    const categories = useSelector((state)=> state.editGame.categories)
    const [columnToEdit, setColumnToEdit] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:9000/games/edit/${id}`)
            console.log(response.body)
            const data = await response.json()
            console.log(data)
            setData(data)
            //put data into the store
            dispatch(setEditAuthor(data.author))
            dispatch(setEditTitle(data.title))
            for(let i = 0; i < 6; i++){
                dispatch(setEditCategory({num:i, cat: data.categories[i]}))
                for(let j = 0; j< 5; j++){
                    dispatch(setEditClue({num:j+5*i, clue: data.clues[j+5*i]}))
                    dispatch(setEditAnswer({num:j+5*i, response: data.responses[j+5*i]}))
                }
            }
            console.log(store.getState())
            

        }
        fetchData()
    }, [dispatch, id])

    
    
    


    return(
        <>
        <h1>
            Game Editor: 
        </h1>
        <h2>
            Click on a Category to Edit
        </h2>
        <EditTitleForm/>
        <br></br>
        <Container>
            <Row>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(0)}>{categories[0]}</div>
                </Col>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(1)}>{categories[1]}</div>
                </Col>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(2)}>{categories[2]}</div>
                </Col>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(3)}>{categories[3]}</div>
                </Col>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(4)}>{categories[4]}</div>
                </Col>
                <Col>
                <div className="categoryBox" onClick={()=> setColumnToEdit(5)}>{categories[5]}</div>
                </Col>
          </Row>
        </Container>
        <br></br>
        <UpdateColumnForm columnNum={columnToEdit}></UpdateColumnForm>
        <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
        </>
    )
}