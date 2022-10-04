import { createSlice } from '@reduxjs/toolkit';
export const cluesAnsweredSlice = createSlice({
    name: 'cluesAnswered',
    initialState: [],
    reducers: {
        clueAnswered: (state, action) => {
          state.push(action.payload)
        }
    },
});
export const {clueAnswered} = cluesAnsweredSlice.actions;
export default cluesAnsweredSlice.reducer;