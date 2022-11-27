import React, {useState} from 'react'
import RoundButton from "./RoundButton";
import {IoImageOutline} from 'react-icons/io5'

function NewPost({user, location, setPosts}) {
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
            user_id: user.id,
            location_id: location.id,
            text: text
        })
      })
        .then((r)=>r.json())
        .then((posts)=>{
          setPosts(posts)
          setText('')
        })
    }
  
    return (
      <div className='new-post'>
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
                {/* <RoundButton type="submit" text={text} setText={setText} setPosts={setPosts} user={user} location={location}/> */}
                <button style={buttonStyle} className='round-button' type='submit' onClick={handleSubmit} disabled={text==='' ? true : false}>Post</button>
              </div>
          </form>
      </div>
    )
}

export default NewPost;