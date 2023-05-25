import { createSlice } from "@reduxjs/toolkit";

const createOttSlice= createSlice({
    name:'OttApp',
    initialState:{
        login:false,
        documentId:'',
        userDetails:''
        // details:{
        //     name:'',
        //     email:'',
        //     password:'',
        //     subscription:"",
        // },
        
        
    },
    reducers:{
        login:(state,action)=>({...state,login:true,documentId:action.payload}),
        logout:(state)=>({...state,login:false,documentId:'',userDetails:''}),
        signup:(state,action)=>({...state,login:true,documentId:action.payload}),
    }
})
export const {login,logout,signup}=createOttSlice.actions;
export const ottReducers=createOttSlice.reducer;

// watchlist
// login
// logout
// signup
// subscription
// account permission
// 

