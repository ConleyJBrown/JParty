import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './scoreSlice'
import displayClueReducer from './displayClueSlice'
import currentClueReducer from './currentClueSlice'
import cluesAnsweredReducer from './cluesAnsweredSlice'
import newGameReducer from './newGameSlice'
import loginReducer from './loginSlice'
import editGameReducer from './editGameSlice'

export const store = configureStore({
    reducer: {score : scoreReducer, displayClue : displayClueReducer, 
        currentClue: currentClueReducer, cluesAnswered: cluesAnsweredReducer,
        newGame: newGameReducer, login: loginReducer, editGame: editGameReducer
    }
})
