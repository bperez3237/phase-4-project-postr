import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import useGet from '../../hooks/useGet'
import PostHeader from './PostHeader'

function FullPost() {

    let {post_id} = useParams()
    const {data: post} = useGet(`/posts/${post_id}`)
    const { id, user, location, text, created_at } = post
    
    console.log(post)
    return (
        <div className='Feed'>
            <div className='headerr'>
                <h2>Post</h2>
            </div>

            <div className='post-card'>
                <div className="profile-pic">
                    <img className='pic' src={user.avatar} alt='user profile'/>
                </div>
                <div className="post-body">
                    <PostHeader name={user.name} username={user.username} />
                    {/* {editingToggle ? <form><input value={postText} onChange={handleChange}/></form> : <p>{postText}</p>} */}
                    <p>{text}</p>
                    <p style={{fontSize:'12px'}}>{location.name} - {created_at.slice(0,10)} - {created_at.slice(11,16)}</p>
                    {/* <PostFooter currentUser={currentUser} userAccess={userAccess} editable={editable} handleLike={handleLike} handleDelete={handleDelete} onEdit={onEdit} editingToggle={editingToggle} post={post}/> */}
                </div>
            </div>
            <div className='new-comment-form'>
                Comment form
            </div>
        
            <div className='comments-list'>
                Comments
            </div>
        </div>
    )
}

export default FullPost