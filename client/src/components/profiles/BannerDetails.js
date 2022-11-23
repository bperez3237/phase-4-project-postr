import React from 'react'
import RoundButton from './RoundButton'

function BannerDetails({user}) {
  return (
    <div className='banner-details'>

      <div className='user-profile-pic'>
          <div id='user-pro-pic'></div>
        </div>
      <div className='edit-profile'><RoundButton/></div>
      <div className='names'>
        <h4>{user.name}</h4>
        <p>@{user.username}</p>
      </div>
      <div className='bio'></div>
      <div className='links'></div>
      <div className='connections'></div>
    </div>
  )
}

export default BannerDetails