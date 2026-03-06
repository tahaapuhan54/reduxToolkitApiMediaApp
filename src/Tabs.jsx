import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from './redux/searchSlice';

const Tabs = () => {

   const tabs = ['photos', 'videos', 'gif']

   const dispatch = useDispatch();

   const activeTabs = useSelector((state) => state.search.activeTabs)

  return (
    <div className='flex gap-5 p-10'>
      {
        tabs.map(function(elem, idx){
         return (
            <button 
         type='button'   
         onClick={()=>{dispatch(setActiveTabs(elem))}}
         className={`${activeTabs == elem ? 'bg-emerald-500' : 'bg-gray-600'} transition cursor-pointer active:scale-95 px-4 py-2 rounded uppercase font-semibold`} key={idx}>
            {elem}
         </button>
         ) 
   })}
    </div>
  )
}

export default Tabs