import React, {useState} from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'

function Searchbar() {
  return (
    <div className='Searchbar'>
      <HiMagnifyingGlass />
      <input type='text' placeholder='Search Twitter' />
    </div>
  )
}

export default Searchbar