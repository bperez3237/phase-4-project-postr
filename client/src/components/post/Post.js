import React from "react";
import {useState} from 'react'
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { useHistory } from "react-router-dom";
import { ConvertTime } from "./utils/ConvertTime";

function Post({post, setPosts, userAccess, editable, handleLike, handleDelete, handleEdit, currentUser}) {
    const history = useHistory()
    const { id, user, text } = post
    const [editingToggle, setEditingToggle] = useState(false)
    const [postText,setPosttext] = useState(text)

    function handleChange(e) {
        e.preventDefault()
        setPosttext(e.target.value)
    }

    function onEdit() {
        if (editingToggle) {
            handleEdit(id, postText)
        }
        setEditingToggle(!editingToggle)
    }

    function handlePostClick(e) {
        if (e.target.className==='post-body' ||
         e.target.className==='post-card' ||
         e.target.className==='profile-pic' ||
         e.target.className==='post-text' ||
         e.target.className==='post-footer' ||
         e.target.className==='post-header') {
            history.push(`/full-post/${id}`)
        }
    }

    return (
        <div className='post-card' onClick={handlePostClick} >
            <div className="profile-pic">
                <img className='pic' src={user.avatar} alt='user profile'/>
            </div>
            <div className="post-body">
                <PostHeader name={user.name} username={user.username} time={ConvertTime(post.created_at)}/>
                {editingToggle ? <form><input value={postText} onChange={handleChange}/></form> : <p className='post-text'>{postText}</p>}
                {/* <p style={{fontSize:'12px'}}>{location.name} - {created_at.slice(0,10)} - {created_at.slice(11,16)}</p> */}
                <PostFooter currentUser={currentUser} userAccess={userAccess} editable={editable} handleLike={handleLike} handleDelete={handleDelete} onEdit={onEdit} editingToggle={editingToggle} post={post} setPosts={setPosts} />
            </div>
            
        </div>
    )
}

export default Post;