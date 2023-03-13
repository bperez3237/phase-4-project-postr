import React from 'react'
import BannerDetails from './BannerDetails'


function Banner({user}) {
  console.log(user)
  return (
    <div>
      <div className='profile-banner'>
        <div className='banner-image'>
          <img src={user.banner} alt='banner'/>
        </div>
        <BannerDetails user={user}/>
      </div>
      
    </div>
  )
}

export default Banner