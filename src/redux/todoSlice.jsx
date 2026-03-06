import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  todos: [
   {
   id: 0,
   text: 'Hello World'
   }
  ]
  
  
}



export const TodoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, action) => {
         const todo = {
            id: nanoid(),
            text: action.payload
         }
         state.todos.push(todo)
      },
      removeTodo: (state, action) => {
        state.todos =  state.todos.filter((todo) => todo.id !== action.payload);
      }
   },
   
})

export const {addTodo, removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer