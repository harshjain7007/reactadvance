import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     fetchPost :  null,
     fetchPostFailed : null,
     loading: false
}

export const Fetch_All_Post = createAsyncThunk("posts/Fetch_All_Post", async (data, { rejectWithValue }) => {
     try {
          const config = {
               method: "GET",
               url: "https://jsonplaceholder.typicode.com/posts",
               headers: {
                    // Authorization: `Bearer ${Auth_Token}`,
                    'Content-Type': 'application/json'
               }
          }
          const result = await axios(config);
          // console.log("Resule== >", result);
          return result.data;
     } catch (error) {
          return rejectWithValue(error.response.data)
     }
})


const allPostSlice = createSlice({
     name: "posts",
     initialState,
     reducers: {
          resetPost: (state) => {
               state.fetchPost =  null,
               state.fetchPostFailed = null,
               state.loading = false
          }
     },
     extraReducers: (builder) => {
          builder
          .addCase(Fetch_All_Post.rejected, (state, action) => {
               state.loading = false;
               state.fetchPostFailed = action.payload;
          })
          .addCase(Fetch_All_Post.pending, (state, action) => {
               state.loading = true;
          })
          .addCase(Fetch_All_Post.fulfilled, (state, action) => {
               state.loading = false;
               state.fetchPost = action.payload;
          })

     }
})

export default allPostSlice.reducer;
export const { resetPost } = allPostSlice.actions





// ---------------- If you want to send params from clint side to server side then try this :-

// -------------  Calling time send params like this :-
// let data = {
//      params: {
//        page,
//        perPage: rowsPerPage,
//        search: selectorStateSearch === "" ? "all" : selectorStateSearch,
//        type: filterType  === "clear" ? "" : filterType ,
//        selection: filter === "clear" ? "" : filter
//      },
//    }
//    dispatch(All_Listing(data))


// ----------- and get this params  like this :- 
// export const All_Listing = createAsyncThunk(
//      "listing/All_Listing",
//      async (data, { rejectWithValue }) => {
//          const {page = 0, perPage = 10, search = "all", type = '', selection = '' } =  data.params
//          try {
//              const config = {
//                  method: "GET",
//                  url: Base_Url + `user/listings?page=${page + 1}&perPage=${perPage}&search=${search}&type=${type}&selection=${selection}`,
//                  headers: {
//                      Authorization: `Bearer ${Auth_Token()}`,
//                      // 'Content-Type': 'application/json',
//                  },
//                  // data
//              };
//              const results = await axios(config);
//              return results.data;
//          } catch (error) {
//              return rejectWithValue(error.response.data.message);
//          }
//      }
//  );
 