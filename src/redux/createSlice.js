import { createSlice } from "@reduxjs/toolkit";

const createOttSclice= createSlice({
    name:'OttApp',
    initialState:{

    },
    reducers:{
        watchlist:()=>{},
        login:()=>{},
        logout:()=>{},
        signup:()=>{},
        subscription:()=>{},
    }
})
export const {watchlist,login,logout,signup,subscription}=createOttSclice.actions;
export const ottReducers=createOttSclice.reducer;

// watchlist
// login
// logout
// signup
// subscription
// account permission
// 

