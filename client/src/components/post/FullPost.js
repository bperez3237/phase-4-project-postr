import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import useGet from '../../hooks/useGet'
import PostHeader from './PostHeader'
import {BsArrowLeft} from 'react-icons/bs'
import FullPostFooter from './FullPostFooter'

function FullPost() {
    let {post_id} = useParams()

    const {data: post, setData: setPost} = useGet(`/posts/${post_id}`)
    const { id, user, location, text, created_at } = post


    return (
        <div className='Feed'>
            <div className='full-post-page-header'>
                <BsArrowLeft />
                <h2>Post</h2>
            </div>

            <div className='full-post'>
                <div className='full-post-header'>
                    <img className='pic' src={user?.avatar} alt='user profile'/>
                    <div className='user-name'>
                        <h3>{user?.name}</h3>
                        <p style={{color:'gray'}}>@{user?.username}</p>
                    </div>
                </div>

                <div className='full-post-body'>
                    <p id='post-text'>{text}</p>
                    <p id='post-location'>{location?.name} - {created_at?.slice(0,10)} - {created_at?.slice(11,16)}</p>
                    <FullPostFooter post={post} />

                </div>

            </div>






            {/* <div className='post-card'>
                <div className="profile-pic">
                    <img className='pic' src={user?.avatar} alt='user profile'/>
                </div>

                <div className="post-body">
                    <PostHeader name={user?.name} username={user?.username} /> */}
                    {/* {editingToggle ? <form><input value={postText} onChange={handleChange}/></form> : <p>{postText}</p>} */}
                {/* </div>
            </div> */}


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