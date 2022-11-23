import React from 'react'
import BannerDetails from './BannerDetails'


function Banner({user}) {
  return (
    <div>
      <div className='profile-banner'>
        <div className='banner-image'>
          <div>image</div>
        </div>
        <BannerDetails user={user}/>
      </div>
      
    </div>
  )
}

export default Banner