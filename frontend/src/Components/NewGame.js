import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NewGame () {
    const {id} = useParams();
    const [data, setData] = useState([]) 
    return(
        <>
        <h1>
            Create a New J-Party Game!
        </h1>
        <h2>
            Click on a category or clue to edit
        </h2>
        <br></br>
        <Container>
            <Row>
                <Col className="categoryHeader">Category 1</Col>
                <Col className="categoryHeader">Category 2</Col>
                <Col className="categoryHeader">Category 3</Col>
                <Col className="categoryHeader">Category 4</Col>
                <Col className="categoryHeader">Category 5</Col>
                <Col className="categoryHeader">Category 6</Col>
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
        </>
    )
}