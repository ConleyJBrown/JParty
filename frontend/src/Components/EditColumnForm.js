import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import ReactDOM from 'react-dom/client';
import { setNewTitle , setNewCategory, setNewClue, setNewAnswer} from '../newGameSlice';

export default function EditColumnForm(props) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()
  const columnNum = props.columnNum

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(store.getState())
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Category Name:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.categories[columnNum])}
          onChange={(e) => dispatch(setNewCategory({ num: columnNum, cat: e.target.value}))}
        />
      </label>
      <div>
      <label>$200 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.clues[columnNum*5])}
          onChange={(e) => dispatch(setNewClue({ num: columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$200 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.responses[columnNum*5])}
          onChange={(e) => dispatch(setNewAnswer({ num: columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$400 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.clues[1+columnNum*5])}
          onChange={(e) => dispatch(setNewClue({ num: 1+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$400 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.responses[1+columnNum*5])}
          onChange={(e) => dispatch(setNewAnswer({ num: 1+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$600 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.clues[2+columnNum*5])}
          onChange={(e) => dispatch(setNewClue({ num: 2+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$600 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.responses[2+columnNum*5])}
          onChange={(e) => dispatch(setNewAnswer({ num: 2+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$800 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.clues[3+columnNum*5])}
          onChange={(e) => dispatch(setNewClue({ num: 3+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$800 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.responses[3+columnNum*5])}
          onChange={(e) => dispatch(setNewAnswer({ num: 3+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$1000 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.clues[4+columnNum*5])}
          onChange={(e) => dispatch(setNewClue({ num: 4+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$1000 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.newGame.responses[4+columnNum*5])}
          onChange={(e) => dispatch(setNewAnswer({ num: 4+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <input type="submit"></input>
    </form>
  )
}