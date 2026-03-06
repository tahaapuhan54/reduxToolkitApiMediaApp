import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
   count: 0
}

export const CounterSlice = createSlice({
   name: 'count',
   initialState,
   reducers: {
      increment: ((state) => {
         state.count +=1
      }),

      decrement: ((state) => {
         state.count -=1
      }),
      incrementByAmount: ((state, action) => {
        state.count += action.payload
      })
   }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions;

export default CounterSlice.reducer