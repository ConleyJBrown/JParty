import { createSlice } from '@reduxjs/toolkit';
export const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        decrementByAmount: (state, action) =>{
            state.value -= action.payload;
        }
    },
});
export const {incrementByAmount, decrementByAmount } = scoreSlice.actions;
export default scoreSlice.reducer;