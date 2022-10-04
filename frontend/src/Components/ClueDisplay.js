import {store} from '../store'
import AnswerForm from './AnswerForm'


export default function ClueDisplay(){
    console.log(store.getState().currentClue.category)
    console.log(store.getState().currentClue.dollarValue)
    return(
        <div className='ClueWindow'>
        {<h1>{store.getState().currentClue.category.payload} for ${store.getState().currentClue.dollarValue.payload}</h1>}
        {<h2>{store.getState().currentClue.clue.payload}</h2> }
        <AnswerForm/>
        </div>
    )
}