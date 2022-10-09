import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {store} from '../store'
import TitleForm from './TitleForm';
import EditColumnForm from './EditColumnForm'

export default function NewGame () {
    const [data, setData] = useState([]) 
    const categories = useSelector((state)=> state.newGame.categories)
    const [columnToEdit, setColumnToEdit] = useState(0)

    return(
        <>
        <h1>
            Create a New J-Party Game!
        </h1>
        <h2>
            Click on a Category to Edit
        </h2>
        <TitleForm/>
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
        <EditColumnForm columnNum={columnToEdit}></EditColumnForm>
        <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
        </>
    )
}