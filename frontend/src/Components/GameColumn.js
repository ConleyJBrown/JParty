import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClueButton from "./ClueButton"
import "../App.css"

export default function GameColumn(props){

    return(
        <Col>
            <Row className="categoryHeader">{props.category}</Row>
            <Row><ClueButton value="$200" clue={props.data.clues[props.index*5]}/></Row>
            <Row><ClueButton value="$400" clue={props.data.clues[1+props.index*5]}/></Row>
            <Row><ClueButton value="$600" clue={props.data.clues[2+props.index*5]}/></Row>
            <Row><ClueButton value="$800" clue={props.data.clues[3+props.index*5]}/></Row>
            <Row><ClueButton value="$1000"clue={props.data.clues[4+props.index*5]}/></Row>
        </Col>
    )
}