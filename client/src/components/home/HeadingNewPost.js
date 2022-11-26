import React, {useState} from 'react'
import RoundButton from './RoundButton'

function HeadingNewPost({ setPosts, user, location}) {
  const [text, setText] = useState('')

  return (
    <div className='heading-new-post'>
        <div className='profile-pic'>
            <div className='pic'></div>
        </div>
        <form className='post-form'>
            <input plceholder="What's happening" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <RoundButton type="submit" text={text} setText={setText} setPosts={setPosts} user={user} location={location}/>
        </form>
    </div>
  )
}

export default HeadingNewPost