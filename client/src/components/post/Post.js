import React from "react";
import {useState} from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import {FaHeart, FaEdit, FaTrashAlt} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'

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
                {editingToggle ? <Form><Form.Group><Form.Control value={postText} onChange={handleChange}></Form.Control></Form.Group></Form> : <p>{postText}</p>}
                <div className="post-footer">
                    <p style={{fontSize:'12px'}}>Postr'd from {locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,19)}</p>
                    <p>
                        {numLikes}{""}
                        {liked ? <FaHeart onClick={()=>handleLike(liked, id)} color='red'/> : <FiHeart onClick={()=>handleLike(liked, id)} color='black'/>}
                        {/* {userAccess && editable ? <Button onClick={()=>onEdit(id)} variant='dark'>{editingToggle ? 'Done Editing' : 'Edit Post'}</Button> : <></>} */}
                        {userAccess && editable ? (editingToggle ? <FaEdit onClick={()=>onEdit(id)} color='#7fffd0'/> : <FiEdit onClick={()=>onEdit(id)} color='black'/>) : <></>}
                        {userAccess && editable ? <FaTrashAlt onClick={()=>handleDelete(id)} /> : <></>}
                        {/* {!userAccess && editable ? <Button onClick={()=>handleLike(liked, id)} size="sm" variant={liked ? 'danger' : 'black'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>} */}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Post;