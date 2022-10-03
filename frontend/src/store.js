import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './scoreSlice'
import displayClueReducer from './displayClueSlice'

export const store = configureStore({
    reducer: {score : scoreReducer, displayClue : displayClueReducer}
})
