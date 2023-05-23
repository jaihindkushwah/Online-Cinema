import { createSlice } from "@reduxjs/toolkit";

const createOttSclice= createSlice({
    name:'OttApp',
    initialState:{
        login:false,
        userDetails:''
        // details:{
        //     name:'',
        //     email:'',
        //     password:'',
        //     subscription:"",
        // },
        
        
    },
    reducers:{
        watchlist:(state)=>({...state}),
        login:(state,action)=>({...state,login:true,userDetails:action.payload}),
        logout:(state)=>({...state,login:false,userDetails:''}),
        signup:(state,action)=>({...state,login:true,userDetails:action.payload}),
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

