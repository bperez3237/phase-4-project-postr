import React from 'react'
import RoundButton from './RoundButton'
import {SlLocationPin} from 'react-icons/sl'
import {AiOutlineLink} from 'react-icons/ai'
import {BiCalendar} from 'react-icons/bi'

function BannerDetails({user}) {
  const buttonStyle = {
    'backgroundColor': 'white',
    'color':'black',
    'border':'solid 1px gray',
  }

  return (
    <div className='banner-details'>

      <div className='user-profile-pic'>
          <div id='user-pro-pic'></div>
      </div>
      <button className='round-button' id='edit-profile-button' style={buttonStyle}>Edit Profile</button>
      <div className='names'>
        <h4>{user.name}</h4>
        <p>@{user.username}</p>
      </div>
      <div className='bio'><p>user.bio will go here</p></div>
      <div className='links'>
        <SlLocationPin /> brooklyn, ny
        <AiOutlineLink /> links.com
        <BiCalendar /> Joined on 
      </div>
      <div className='connections'># Following  # Followers</div>
    </div>
  )
}

export default BannerDetails