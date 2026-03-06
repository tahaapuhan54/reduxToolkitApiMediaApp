import React from 'react'
import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from './redux/collectionSlice';

const ResultCard = ({item}) => {

  const dispatch = useDispatch()

  // const addToCollection = (item) => {

  //   dispatch(addCollection(item))
  //   dispatch(addedToast())
   
  // }


  return (
    <div className='w-full h-80 bg-white rounded'>
      <div className='h-[70%]'>
         {item.type == 'photos' && <img className='w-full h-full object-cover object-center' src={item.src} />}
         {item.type == 'video' && <video autoPlay loop muted className='w-full h-full object-cover object-center' src={item.src} alt="" ></video> }
         {item.type == 'gif' && <img loading="lazy" className='w-full h-full object-cover object-center' src={item.src} alt="" /> }

      </div>
      <div className='relative'>
         <h2 className='text-black font-semibold text-sm text-center items-center justify-center overflow-auto   '>{item.title}</h2>
         <button 
         onClick={()=>{
          dispatch(addCollection(item))
          dispatch(addedToast())
         }}
         className='bg-indigo-600 text-white rounded  px-4 py-2 cursor-pointer font-medium absolute right-0 active:scale-95 '>Save</button>
      </div>
     
    </div>
  )
}

export default ResultCard