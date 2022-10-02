import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PlayGame () {
    const {id} = useParams();
    const [data, setData] = useState([]) 
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:9000/games/${id}`)
            console.log(response)
            const data = await response.json()
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
        <Container>
            <Row>
                <Col>Cateogry 1</Col>
                <Col>Category 2</Col>
                <Col>Category 3</Col>
                <Col>Category 4</Col>
                <Col>Category 5</Col>
                <Col>Category 6</Col>
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