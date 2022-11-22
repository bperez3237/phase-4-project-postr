import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

function Heading({user}) {
  return (
    <div className='Feed-heading'>
      <BsArrowLeft />
      <div className='heading-label'>
        <h3>{user.username}</h3>
      </div>
      
    </div>
  )
}

export default Heading
