import { useState } from 'react';
import{store} from '../store';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { setEditTitle , setEditCategory, setEditClue, setEditAnswer, setEditAuthor} from '../editGameSlice';

export default function UpdateColumnForm(props) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch()
  const columnNum = props.columnNum
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(setEditAuthor(store.getState().editGame.username))
    console.log(store.getState())

    //make a POST request to the backend
    const response = await fetch('http://localhost:9000/games', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type':  'application/json'
      },
      body: JSON.stringify(store.getState().editGame)
    })
    if (response.status !== 201) {
      // handle error here
    } 
    else {
      console.log(response.body)
      navigate('/', {replace: true })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Category Name:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.categories[columnNum])}
          onChange={(e) => dispatch(setEditCategory({ num: columnNum, cat: e.target.value}))}
        />
      </label>
      <br></br>
      <br></br>
      <div>
      <label>$200 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.clues[columnNum*5])}
          onChange={(e) => dispatch(setEditClue({ num: columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$200 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.responses[columnNum*5])}
          onChange={(e) => dispatch(setEditAnswer({ num: columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$400 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.clues[1+columnNum*5])}
          onChange={(e) => dispatch(setEditClue({ num: 1+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$400 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.responses[1+columnNum*5])}
          onChange={(e) => dispatch(setEditAnswer({ num: 1+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$600 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.clues[2+columnNum*5])}
          onChange={(e) => dispatch(setEditClue({ num: 2+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$600 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.responses[2+columnNum*5])}
          onChange={(e) => dispatch(setEditAnswer({ num: 2+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$800 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.clues[3+columnNum*5])}
          onChange={(e) => dispatch(setEditClue({ num: 3+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$800 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.responses[3+columnNum*5])}
          onChange={(e) => dispatch(setEditAnswer({ num: 3+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <div>
      <label>$1000 CLUE:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.clues[4+columnNum*5])}
          onChange={(e) => dispatch(setEditClue({ num: 4+columnNum*5, clue: e.target.value}))}
        />
      </label>
      <label>$1000 Answer:
        <input 
          type="text" 
          value={useSelector((state )=> state.editGame.responses[4+columnNum*5])}
          onChange={(e) => dispatch(setEditAnswer({ num: 4+columnNum*5, response: e.target.value}))}
        />
      </label>
      </div>
      <br></br>
      <input type="submit" value={"FINISH AND SAVE YOUR GAME"}></input>
    </form>
  )
}