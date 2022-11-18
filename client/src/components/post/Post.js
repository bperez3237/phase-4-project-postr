import React from "react";
import {useState} from 'react'
import {Button, Card, Form} from 'react-bootstrap'

function Post({id, username, text, locationName, createdAt, userAccess, editable, numLikes, liked, handleLike, handleDelete, handleEdit}) {
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
                <h5>{username} says:</h5>
                {editingToggle ? <Form><Form.Group><Form.Control value={postText} onChange={handleChange}></Form.Control></Form.Group></Form> : <Card.Text style={{fontSize:'18px'}}>{postText}</Card.Text>}
                <p style={{fontSize:'12px'}}>Postr'd from {locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,19)}</p>
                <div className="post-footer">
                    {numLikes} Like{numLikes==1?'':'s'}
                    {userAccess && editable ? <Button className="" onClick={()=>onEdit(id)} variant='dark'>{editingToggle ? 'Done Editing' : 'Edit Post'}</Button> : <></>}
                    {userAccess && editable ? <Button className="" onClick={()=>handleDelete(id)} variant='dark'>Delete Post</Button> : <></>}
                    {!userAccess && editable ? <Button onClick={()=>handleLike(liked, id)} size="sm" variant={liked ? 'danger' : 'black'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>}
                </div>
            </div>
            
        </div>
    )
}

export default Post;