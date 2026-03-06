import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from './redux/searchSlice';

const SearchBar = () => {

   const [text, setText] = useState("");

   const dispatch = useDispatch();

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(setQuery(text))
      console.log(text)
      setText("")
   
   }

  return (
    <div>
      <form className='flex gap-5 bg-gray-900 p-10' onSubmit={(e) => {
         submitHandler(e)
      }}>
         <input value={text} onChange={(e) => { setText(e.target.value) }} required type="text" placeholder='search...' className='border-2 outline-none px-4 py-2 rounded text-xl w-full ' />
         <button className='active:scale-95 border-2 outline-none px-4 py-2 rounded text-xl cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar