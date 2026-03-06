import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CollectionPage from "./pages/collectionPage";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";


// import { decrement, increment, incrementByAmount } from "./redux/counterSlice"


function App() {



// useEffect(()=>{
//   dispatch(fetchMedias())
// },[dispatch])

// const filteredData = data.filter((item)=>{
//   return item.title.toLowerCase().includes(searchTerm.toLowerCase())
// })

  return (

   
    <div className="min-h-screen text-white w-full bg-gray-950">

        <Navbar/>


      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="collection" element={<CollectionPage/>}/>
      </Routes>

      <ToastContainer />

      {/* <div>
         <TodoAdd />
         <Todos/>
      </div> */}
      
        
      {/* <div>
      {loading && <p>Yükleniyor</p>}
      {error}
      </div> */}

     {/* <div className="flex justify-center p-4">
      <input
      type="text"
      placeholder="ürün ara..."
      className="border p-2 rounded"
      onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
      />
     </div> */}
     

     {/* <div className="flex flex-wrap gap-4 text-center justify-center items-center">
      {
        filteredData.map(item=>(
          <div key={item.id}>
            
            <p>{item.title}</p>
            <img className="w-50 h-50 object-contain" src={item.image} alt="" />
          </div>
        ))
      }
     </div> */}
      
    </div>

    
  )
}

export default App
