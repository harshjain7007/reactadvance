import { configureStore } from "@reduxjs/toolkit";
// import { currentNum } from "./reducer";.
import { currentNum } from "./reducer";
import  allPostSlice  from "./slice/postSlice";

const store = configureStore({
     reducer:{
          currentNum,
          allPost: allPostSlice
          // allPost:  allPostSlice
     }
})

export default store