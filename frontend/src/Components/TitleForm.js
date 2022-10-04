import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom/client';
import { setNewTitle } from '../newGameSlice';

export default function TitleForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(store.getState())
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name your game:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.title)}
          onChange={(e) => dispatch(setNewTitle(e.target.value))}
        />
      </label>
    </form>
  )
}