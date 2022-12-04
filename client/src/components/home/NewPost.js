import React, {useState} from 'react'
import {IoImageOutline} from 'react-icons/io5'

function NewPost({login, setPosts}) {
    const [text, setText] = useState('')

    const buttonStyle = text==='' ? {} : {
      backgroundColor: '#274d40',
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      fetch('/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: login.user.id,
            location_id: login.location.id,
            text: text
        })
      })
        .then((r)=>r.json())
        .then((posts)=>{
          console.log('here')
          setPosts(posts)
          setText('')
        })
    }
  
    return (
      <div className='new-post'>
          <div className='profile-pic'>
              <img className='pic' src={login.user.avatar} alt='user profile'/>
          </div>
          <form className='post-form'>
              <input placeholder="What's happening?" value={text} onChange={(e)=>setText(e.target.value)}></input>
              <div className='form-footer'>
                <div className='image-upload'>
                  <label htmlFor='file-input'>
                    <IoImageOutline />
                  </label>
                <input id='file-input' type='file' />
                </div>
                <button style={buttonStyle} className='round-button' type='submit' onClick={handleSubmit} disabled={text==='' ? true : false}>Post</button>
              </div>
          </form>
      </div>
    )
}

export default NewPost;