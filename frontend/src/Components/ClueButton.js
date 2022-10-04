import "../ClueButton.css"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFalse, setTrue} from '../displayClueSlice'
import {setClue, setAnswer, setValue, setCategory} from '../currentClueSlice'
import { store } from "../store"
import {clueAnswered} from '../cluesAnsweredSlice'


export default function ClueButton(props){
    
    let dollarValue = parseInt(props.value.slice(1))
    const dispatch = useDispatch()
    const displayClue = useSelector((state)=> state.displayClue)
    
    function handleClueClick(){
        dispatch(setTrue())
        dispatch(setValue(dollarValue))
        dispatch(setClue(props.clue))
        dispatch(setAnswer(props.answer))
        dispatch(setCategory(props.category))
        dispatch(clueAnswered(props.clueNum))
        console.log("Clues answered so far: " +store.getState().cluesAnswered)
    }
    
    return(
        <button className="ClueButton" disabled={props.disabled} onClick={handleClueClick}>{props.value}</button>
    )
}