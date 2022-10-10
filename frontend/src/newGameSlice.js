import { createSlice } from '@reduxjs/toolkit';
export const newGameSlice = createSlice({
    name: 'newGame',
    initialState: {
        title: "New Game",
        author: "Guest",
        categories: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
        clues: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",],
        responses: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
    },
    reducers: {
        setNewTitle: (state, action) => {
            state.title = action.payload;
        },
        setNewAuthor: (state, action) => {
            state.author = action.payload;
        },
        setNewClue: (state, action) => {
            state.clues[action.payload.num] = action.payload.clue;
        },

        setNewAnswer: (state, action) =>{
            state.responses[action.payload.num] = action.payload.response;
        },
        setNewCategory: (state, action) => {
            state.categories[action.payload.num] = action.payload.cat;
        }
        
    },
});
export const {setNewClue, setNewAnswer, setNewCategory, setNewTitle, setNewAuthor} = newGameSlice.actions;
export default newGameSlice.reducer;