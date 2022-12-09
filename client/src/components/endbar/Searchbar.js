import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'

function Searchbar() {
  const [search, setSearch] = useState('')
  
  return (
    <div className='Searchbar'>
      <BiSearch />
      <input 
        type='text' 
        placeholder='Search Twitter' 
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Searchbar