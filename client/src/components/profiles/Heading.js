import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

function Heading({user}) {
  return (
    <div className='Feed-heading'>
      <div id='label'>
        <BsArrowLeft />
        <div className='heading-label'>
          <h3>{user.username}</h3>
          <p>{'#'} Posts</p>
        </div></div>
      
      <div></div>
    </div>
  )
}

export default Heading
