import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../collectionCard'
import { clearCollection, clearToast } from '../redux/collectionSlice'

const CollectionPage = ({item}) => {
   const dispatch = useDispatch()

   const collection = useSelector(state=>state.collection.items)


  return (
   <div>
        <div className='p-5'>
         <button onClick={()=>{
           dispatch(clearCollection(item))
           dispatch(clearToast())
         }} className='text-base font-medium active:scale-95 bg-white text-blue-900 rounded px-4 py-2 cursor-pointer'>koleksiyonu sil</button>
      </div>
    <div className='flex flex-wrap justify-start gap-5 w-full overflow-auto py-6'>
    
      {
         collection.map((item,id)=> {
            return <div key={id} className='w-full sm:w-[45%] md:w-[30%] lg:w-[18%]'>
               <CollectionCard item={item} />
            </div>
         })
      }
    </div>
    </div>
  )
}

export default CollectionPage 