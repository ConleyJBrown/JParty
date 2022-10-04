import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClueButton from "./ClueButton";
import {store} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import "../App.css"

export default function GameColumn(props){
    const num = props.index*5
    const cluesAnswered = useSelector(state => state.cluesAnswered)
    return(
        <Col key = {`column${props.index}`}>
            <Row key = "cat">
                <div className="categoryHeader">
                {props.category}
                </div>
            </Row>
            {!cluesAnswered.includes(num) && <Row key = "clue200"><ClueButton value="$200" clue={props.data.clues[num]} answer={props.data.responses[num]} category ={props.category} clueNum = {num}/></Row>}
            {cluesAnswered.includes(num) && <Row key = "blank200"><ClueButton value=" " disabled={true} /></Row>}
            
            {!cluesAnswered.includes(1+num) &&<Row key="clue400"><ClueButton value="$400" clue={props.data.clues[1+num]} answer={props.data.responses[1+num]} category ={props.category} clueNum = {1+num}/></Row>}
            {cluesAnswered.includes(1+num) && <Row key = "blank400"><ClueButton value=" " disabled={true} /></Row>}

            {!cluesAnswered.includes(2+num) && <Row key="clue600"><ClueButton value="$600" clue={props.data.clues[2+num]} answer={props.data.responses[2+num]} category ={props.category} clueNum = {2+num}/></Row>}
            {cluesAnswered.includes(2+num) && <Row key = "blank600"><ClueButton value=" " disabled={true} /></Row>}

            {!cluesAnswered.includes(3+num) &&<Row key = "clue800"><ClueButton value="$800" clue={props.data.clues[3+num]} answer={props.data.responses[3+num]} category ={props.category} clueNum = {3+num}/></Row>}
            {cluesAnswered.includes(3+num) && <Row key = "blank800"><ClueButton value=" " disabled={true} /></Row>}

            {!cluesAnswered.includes(4+num) && <Row key= "clue1000"><ClueButton value="$1000"clue={props.data.clues[4+num]} answer={props.data.responses[4+num]} category ={props.category} clueNum = {4+num}/></Row>}
            {cluesAnswered.includes(4+num) && <Row key = "clue200"><ClueButton value=" " disabled={true} /></Row>}

        </Col>
    )
}