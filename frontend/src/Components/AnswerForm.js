import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom/client';
import { incrementByAmount, decrementByAmount } from '../scoreSlice';
import {setTrue, setFalse} from '../displayClueSlice'

export default function AnswerForm() {
  const [userAnswer, setUserAnswer] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(store.getState().currentClue.answer)
    if(userAnswer.toUpperCase() == store.getState().currentClue.answer.payload.toUpperCase()){
       dispatch(incrementByAmount(store.getState().currentClue.dollarValue.payload))
    }
    else{
        dispatch(decrementByAmount(store.getState().currentClue.dollarValue.payload))
    }
    dispatch(setFalse())
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Your response:
        <input 
          type="text" 
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}