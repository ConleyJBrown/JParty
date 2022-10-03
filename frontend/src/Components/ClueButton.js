import App from "../App"
import "../ClueButton.css"
import ClueDisplay from "./ClueDisplay"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFalse, setTrue} from '../displayClueSlice'


export default function ClueButton(props){
    
    const dispatch = useDispatch()
    const displayClue = useSelector((state)=> state.displayClue)
    
    function handleClueClick(){
        dispatch(setTrue())
        console.log(displayClue)
    }
    
    return(
        <button className="ClueButton" onClick={handleClueClick}>{props.value}</button>
    )
}