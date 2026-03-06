import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

export const CollectionSlice = createSlice({
   name:'collection',
   initialState:{
      items: JSON.parse(localStorage.getItem('collection')) || []
   },
   reducers:{
      addCollection: (state,action) => {
         // Aynı eleman daha önce eklenmiş mi kontrol et
         const exists = state.items.find(item => item.id === action.payload.id)
         if(!exists) {
           state.items.push(action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
         }
      },
      removeCollection: (state,action) => {
         state.items = state.items.filter(item => item.id !== action.payload) // burda item.id dediğimiz için aksiyon alırken item.id olarak yazman lazım
         localStorage.setItem('collection', JSON.stringify(state.items));
      },
      clearCollection: (state) => {
         state.items=[]
         localStorage.removeItem('collection')
      },
      addedToast: () => {
         toast('Koleksiyona eklendi ✅' , {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "dark",
         transition: Zoom,
         });
      },
      clearToast: () => {
         toast('Koleksiyon temizlendi ✅' , {
         position: "top-center",
         autoClose: 2000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "dark",
         transition: Zoom,
         });
      }
   }
})



export const {addCollection, removeCollection, clearCollection, addedToast, clearToast} = CollectionSlice.actions

export default CollectionSlice.reducer