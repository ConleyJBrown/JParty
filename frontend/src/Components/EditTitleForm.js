import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom/client';
import { setEditTitle } from '../editGameSlice';

export default function EditTitleForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()



  return (
    <form >
      <label>Name your game:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.title)}
          onChange={(e) => dispatch(setEditTitle(e.target.value))}
        />
      </label>
    </form>
  )
}