import { createSlice } from '@reduxjs/toolkit';
export const currentClueSlice = createSlice({
    name: 'currentClue',
    initialState: {
        clue: "",
        answer: "",
        dollarValue: 0,
        category: ""
    },
    reducers: {
        setClue: (state, action) => {
            state.clue = action;
        },

        setAnswer: (state, action) =>{
            state.answer = action;
        },
        setValue: (state, action) => {
            state.dollarValue = action;
        },
        setCategory: (state, action) => {
            state.category = action;
        }
        
    },
});
export const {setClue, setAnswer, setValue, setCategory} = currentClueSlice.actions;
export default currentClueSlice.reducer;