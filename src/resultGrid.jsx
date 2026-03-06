import { useEffect } from 'react'
import {fetchPhotos, fetchVideos, fetchGIF} from './api/mediaApi'
import { setResults, setLoading, setError} from './redux/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './resultCard'


const ResultGrid = () => {

   const dispatch = useDispatch()

   const {results, activeTabs, query, loading, error} = useSelector((store) => store.search)

  

   useEffect(function(){
      
      if(!query) return // burda Mantık: "Eğer sorgu (query) yoksa, aşağıdaki API çağırma kodlarına hiç bakma ve buradan geri dön." boş yere hata mesajını önlüyor.

       const getData = async () => {
         try {
            
            dispatch(setLoading())

         let data = []
         if(activeTabs == 'photos') { 
        const response = await fetchPhotos(query)
         data =  response.results.map((item)=> ({
         id:item.id,
         type: 'photos',
         title:item.alt_description,
         thumbnail:item.urls.small,
         src:item.urls.full
        }))
      }
      if(activeTabs == 'videos') {
         const response = await fetchVideos(query)
         data = response.videos.map((item)=>({
           id:item.id,
           title: item.user.name || 'video', 
           type:'video',
           thumbnail: item.image,
           src: item.video_files[0].link,
           url: item.url
         }))
      }
      if(activeTabs == 'gif') {
         const response = await fetchGIF(query)
         data = response.data.results.map((item)=>({
            id:item.id,
            type:'gif',
            title: item.title || 'GIF',
            thumbnail: item.media_formats.tinygif.url,
            src:item.media_formats.gif.url
         }))
      }
      dispatch(setResults(data))
         } catch (err) {
            dispatch(setError(err.message))
         }

   }
      getData()
   }, [query, activeTabs, dispatch])

   if(error) return <h1 className='p-4'>hata..</h1>
   
   if (loading) return <h1 className='p-4'>yükleniyor...</h1>

  return (
    <div className='flex flex-wrap justify-center gap-5 -full overflow-auto '>
      {
         results.map((item, idx) => {
            return <div key={idx} className='w-full sm:w-[45%] md:w-[30%] lg:w-[18%] '>
               <ResultCard item={item}/>
               </div>
         })
      }
    </div>
  )
}

export default ResultGrid