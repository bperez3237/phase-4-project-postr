import React, {useState} from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'

function Searchbar() {
  const [search, setSearch] = useState('')
  
  return (
    <div className='Searchbar'>
      <HiMagnifyingGlass />
      <input type='text' 
        placeholder='Search Twitter' 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Searchbar