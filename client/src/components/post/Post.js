import React from "react";
import {useState} from 'react'
import PostFooter from "./PostFooter";

function Post({id, name, username, text, locationName, createdAt, userAccess, editable, numLikes, liked, handleLike, handleDelete, handleEdit}) {
    const [postText,setPosttext] = useState(text)
    const [editingToggle, setEditingToggle] = useState(false)

    function handleChange(e) {
        e.preventDefault()
        setPosttext(e.target.value)
    }

    function onEdit(id) {
        if (editingToggle) {
            handleEdit(id, postText)
        }
        setEditingToggle(!editingToggle)
    }

    return (
        <div className='post-card'>
            <div className="profile-pic">
                {/* add pfp here */}
                <div id='pic'></div>
            </div>
            <div className="post-body">
                <h5>{name} <span style={{color:'gray'}}>@{username}</span></h5>
                {editingToggle ? <form><input value={postText} onChange={handleChange}/></form> : <p>{postText}</p>}
                <p style={{fontSize:'12px'}}>{locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,16)}</p>
                <PostFooter userAccess={userAccess} editable={editable} liked={liked} numLikes={numLikes} id={id} handleLike={handleLike} handleDelete={handleDelete} onEdit={onEdit} editingToggle={editingToggle}/>
            </div>
            
        </div>
    )
}

export default Post;