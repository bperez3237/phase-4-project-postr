import React, {useState} from 'react'
import RoundButton from './RoundButton'
import {IoImageOutline} from 'react-icons/io5'

function HeadingNewPost({ setPosts, user, location}) {
  const [text, setText] = useState('')

  return (
    <div className='heading-new-post'>
        <div className='profile-pic'>
            <div className='pic'></div>
        </div>
        <form className='post-form'>
            <input placeholder="What's happening?" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <div className='form-footer'>
              <div className='image-upload'>
                <label for='file-input'>
                  <IoImageOutline />
                </label>
              <input id='file-input' type='file' />
              </div>
              <RoundButton type="submit" text={text} setText={setText} setPosts={setPosts} user={user} location={location}/>
            </div>
        </form>
    </div>
  )
}

export default HeadingNewPost