import { createReducer } from "@reduxjs/toolkit";

const initialState = {
     Num: 0
};
   

export const currentNum = createReducer(initialState,(builder) => {
     builder
     .addCase('add', (state, action) => {
          state.Num += action.payload;
     })
     .addCase('sub', (state, action) => {
               state.Num -= action.payload
     })
     .addCase('mul', (state, action) => {
          state.Num *= action.payload
     })
     .addCase('div',(state, action) => {
          state.Num /= action.payload
     } )
     .addCase('clear', (state, action) => {
          state.Num = 0
     })
})