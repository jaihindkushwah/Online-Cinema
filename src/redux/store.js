import { configureStore } from "@reduxjs/toolkit";
import { ottReducers } from "./createSlice";

export const store=configureStore({
    reducer:ottReducers
    // {
    //     ottapp:ottReducers
    // }
})

// reducer:{
//     ottapp:ottReducers
// }