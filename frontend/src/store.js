import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './scoreSlice'
import displayClueReducer from './displayClueSlice'
import currentClueReducer from './currentClueSlice'
import cluesAnsweredReducer from './cluesAnsweredSlice'
import newGameReducer from './newGameSlice'

export const store = configureStore({
    reducer: {score : scoreReducer, displayClue : displayClueReducer, 
        currentClue: currentClueReducer, cluesAnswered: cluesAnsweredReducer,
        newGame: newGameReducer
    }
})
