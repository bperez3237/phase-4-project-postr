import React from 'react'
import BannerDetails from './BannerDetails'


function Banner() {
  return (
    <div className='profile-banner'>
      <div className='banner-image'>
        <div>image</div>
      </div>
      <div className='profile-pic'></div>
      <BannerDetails />
    </div>
  )
}

export default Banner