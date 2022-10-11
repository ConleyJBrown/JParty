import { createSlice } from '@reduxjs/toolkit';
export const editGameSlice = createSlice({
    name: 'editGame',
    initialState: {
        title: "",
        author: "",
        categories: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
        clues: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",],
        responses: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
    },
    reducers: {
        setEditTitle: (state, action) => {
            state.title = action.payload;
        },
        setEditAuthor: (state, action) => {
            state.author = action.payload;
        },
        setEditClue: (state, action) => {
            state.clues[action.payload.num] = action.payload.clue;
        },

        setEditAnswer: (state, action) =>{
            state.responses[action.payload.num] = action.payload.response;
        },
        setEditCategory: (state, action) => {
            state.categories[action.payload.num] = action.payload.cat;
        }
        
    },
});
export const {setEditClue, setEditAnswer, setEditCategory, setEditTitle, setEditAuthor} = editGameSlice.actions;
export default editGameSlice.reducer;