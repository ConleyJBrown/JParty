import { createSlice } from '@reduxjs/toolkit';
export const displayClueSlice = createSlice({
    name: 'displayClue',
    initialState: {
        value: false,
    },
    reducers: {
        setFalse: (state) => {
            state.value = false;
        },

        setTrue: (state) =>{
            state.value = true;
        }
    },
});
export const {setFalse, setTrue} = displayClueSlice.actions;
export default displayClueSlice.reducer;