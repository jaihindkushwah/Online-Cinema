import { createSlice } from "@reduxjs/toolkit";

const createOttSclice= createSlice({
    name:'OttApp',
    initialState:{
        login:false,
        // details:{
        //     name:'',
        //     email:'',
        //     password:'',
        //     subscription:"",
        // },
        
        
    },
    reducers:{
        watchlist:(state)=>({...state}),
        login:(state)=>({...state,login:true}),
        logout:(state)=>({...state,login:false}),
        signup:(state)=>({...state}),
        subscription:(state)=>({...state}),
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

