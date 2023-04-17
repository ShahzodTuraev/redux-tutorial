import { createSlice } from "@reduxjs/toolkit";

export  const counterSlice =createSlice({
    name: 'counter',
    initialState: {data: 0},
    reducers: {
        increment: (state, action)=>{
            console.log(action.payload.a );
            state.data += action.payload.a;
        },
        decriment: (state, action)=>{
            state.data -= 1;
        },
    }
})
export const {increment, decriment} = counterSlice.actions;
export default counterSlice.reducer