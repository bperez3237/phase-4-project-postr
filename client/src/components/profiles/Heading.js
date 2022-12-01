import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'

function Heading({username}) {
  return (
    <div className='profile-heading'>
      <div id='label'>
        <BsArrowLeft />
        <div className='heading-label'>
          <h3>{username}</h3>
          <p>{'#'} Posts</p>
        </div></div>
      
      <div></div>
    </div>
  )
}

export default Heading
