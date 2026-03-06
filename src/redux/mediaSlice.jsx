import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  searchTerm: ''
}

export const fetchMedias = createAsyncThunk('media/fetchMedias', async() => {
   const response = await axios.get('https://fakestoreapi.com/products?limit=15');
   return response.data;
})

export const MediaSlice = createSlice({
   name: 'count',
   initialState,
   reducers: {
      changeSearchTerm: (state, action) => {
         state.searchTerm = action.payload
      }
   },

   extraReducers: (builder) => {
      builder.addCase(fetchMedias.pending, (state) => {
         state.loading = true
      }),
      builder.addCase(fetchMedias.fulfilled, (state, action) => {
         state.loading = false,
         state.data = action.payload
      }),
      builder.addCase(fetchMedias.rejected, (state) => {
         state.loading = false,
         state.error = "Veri yok.."
      })
   }
})

export const {changeSearchTerm} = MediaSlice.actions;

export default MediaSlice.reducer