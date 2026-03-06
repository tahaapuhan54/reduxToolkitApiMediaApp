import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from './counterSlice'
import mediaReducer from './mediaSlice'
import todoReducer from './todoSlice'
import searchReducer from './searchSlice'
import collectionReducer from './collectionSlice'

export const store = configureStore({
   reducer: {
      counter: counterReducer,
      media: mediaReducer,
      todo: todoReducer,
      search: searchReducer,
      collection: collectionReducer
   }
})