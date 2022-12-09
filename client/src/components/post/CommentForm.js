import React, {useState} from 'react'
import {IoImageOutline} from 'react-icons/io5'

function CommentForm({post, setPosts, currentUser}) {
    const [comment, setComment] = useState('')

    const buttonStyle = comment==='' ? {} : {
        backgroundColor: 'black',
    }


    function handleSubmit(e) {
        e.preventDefault()
        fetch('/replies',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text_content': comment,
                'post_id': post.id,
                'user_id': currentUser.id
            })})
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setPosts() need to update posts to include new replies
                setComment('')
            })
    }


    return (
        <div className='comment-card'>
            <div className='profile-pic'>
              <img className='pic' src={currentUser.avatar} alt='user profile'/>
            </div>
            <form className='comment-form'>
                <input placeholder='Post here' value={comment} onChange={(e)=>setComment(e.target.value)} />
                <div className='form-footer'>
                    <div className='image-upload'>
                        <label htmlFor='file-input'>
                            <IoImageOutline />
                        </label>
                        <input id='file-input' type='file' />
                    </div>
                    <button style={buttonStyle} className='round-button' type='submit' onClick={handleSubmit} disabled={comment==='' ? true : false}>Reply</button>
                </div>
            </form>
        </div>
  )
}

export default CommentForm