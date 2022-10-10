import { createSlice } from '@reduxjs/toolkit';
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        username: "GUEST",
    },
    reducers: {
        logIn: (state, action) => {
            state.loggedIn = true;
            state.username = action.payload;
        },

        logOut: (state) =>{
            state.loggedIn = false;
            state.username = "GUEST";
        }
        
    },
});
export const {logIn, logOut} = loginSlice.actions;
export default loginSlice.reducer;