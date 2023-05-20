import { configureStore } from "@reduxjs/toolkit";
import { ottReducers } from "./createSlice";

export const store=configureStore({
    reducer:ottReducers
})

// reducer:{
//     ottapp:ottReducers
// }