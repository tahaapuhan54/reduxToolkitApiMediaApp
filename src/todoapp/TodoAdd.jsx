import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/todoSlice'

const TodoAdd = () => {

   const [text, setText] = useState("");

   const dispatch = useDispatch();

   const handlesubmit = (e) => {
      e.preventDefault()
      dispatch(addTodo(text))
      setText("");
   }


  return (

<div>
   <form onSubmit={handlesubmit} className='flex gap-2 p-4' >
       <input
       type='text'
       className='border p-2 rounded w-full outline-orange-500'
       placeholder='todo ekle'
       value={text}
       onChange={(e) => setText(e.target.value)}
       />
       <button type='submit' className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition'>
         Ekle
       </button>
   </form>
</div>
   
    
    
   

  )}

export default TodoAdd