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
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(0)}>{categories[0]}</Col>
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(1)} >{categories[1]}</Col>
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(2)}>{categories[2]}</Col>
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(3)}>{categories[3]}</Col>
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(4)}>{categories[4]}</Col>
                <Col className="categoryHeader" onClick={()=> setColumnToEdit(5)}>{categories[5]}</Col>
            </Row>
            <Row>
                <Col>$200</Col>
                <Col>$200</Col>
                <Col>$200</Col>
                <Col>$200</Col>
                <Col>$200</Col>
                <Col>$200</Col>
            </Row>
            <Row>
                <Col>$400</Col>
                <Col>$400</Col>
                <Col>$400</Col>
                <Col>$400</Col>
                <Col>$400</Col>
                <Col>$400</Col>
            </Row>
            <Row>
                <Col>$600</Col>
                <Col>$600</Col>
                <Col>$600</Col>
                <Col>$600</Col>
                <Col>$600</Col>
                <Col>$600</Col>
            </Row>
            <Row>
                <Col>$800</Col>
                <Col>$800</Col>
                <Col>$800</Col>
                <Col>$800</Col>
                <Col>$800</Col>
                <Col>$800</Col>
            </Row>
            <Row>
                <Col>$1000</Col>
                <Col>$1000</Col>
                <Col>$1000</Col>
                <Col>$1000</Col>
                <Col>$1000</Col>
                <Col>$1000</Col>
            </Row>

        </Container>
        <div>
            <button>SAVE YOUR GAME</button>
        </div>
        <EditColumnForm columnNum={columnToEdit}></EditColumnForm>
        <div>
                <Link to="/">
                <button>HOME</button>
                </Link>
            </div>
        </>
    )
}