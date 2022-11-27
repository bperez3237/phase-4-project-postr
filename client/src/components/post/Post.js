import React from "react";
import {useState} from 'react'
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function Post({post, userAccess, editable, handleLike, handleDelete, handleEdit, currentUser}) {
    
    const { id, user, location, text, created_at } = post
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

    return (
        <div className='post-card'>
            <div className="profile-pic">
                {/* add pfp here */}
                <div id='pic'></div>
            </div>
            <div className="post-body">
                <PostHeader name={user?.name} username={user?.username} />
                {editingToggle ? <form><input value={postText} onChange={handleChange}/></form> : <p>{postText}</p>}
                <p style={{fontSize:'12px'}}>{location.name} - {created_at.slice(0,10)} - {created_at.slice(11,16)}</p>
                <PostFooter currentUser={currentUser} userAccess={userAccess} editable={editable} handleLike={handleLike} handleDelete={handleDelete} onEdit={onEdit} editingToggle={editingToggle} post={post}/>
            </div>
            
        </div>
    )
}

export default Post;