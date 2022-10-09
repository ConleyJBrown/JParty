import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { setNewTitle , setNewCategory, setNewClue, setNewAnswer} from '../newGameSlice';

export default function EditColumnForm(props) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()
  const columnNum = props.columnNum
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(store.getState())

    //make a POST request to the backend
    const response = await fetch('http://localhost:9000/games', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type':  'application/json'
      },
      body: JSON.stringify(store.getState().newGame)
    })
    if (response.status !== 201) {
      // handle error here
    } 
    else {
      navigate('/', {replace: true })
      console.log(response.body)
    }
    
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
      <br></br>
      <br></br>
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
      <br></br>
      <input type="submit" value={"FINISH AND SAVE YOUR GAME"}></input>
    </form>
  )
}