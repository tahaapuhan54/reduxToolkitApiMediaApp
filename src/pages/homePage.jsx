import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../searchBar'
import Tabs from '../Tabs'
import ResultGrid from '../resultGrid'

const HomePage = () => {
      const { query } = useSelector((store) => store.search)


  return (
    <div>


       <SearchBar />
      

      {query !== '' && 
      <div>
         <Tabs />
         <ResultGrid />
      </div>}


    </div>
  )
}

export default HomePage