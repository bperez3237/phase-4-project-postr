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
        <Card className='m-4'>
            <Card.Body>
                <Card.Title>{username} says:</Card.Title>
                <br></br>
                {editingToggle ? <Form><Form.Group><Form.Control value={postText} onChange={handleChange}></Form.Control></Form.Group></Form> : <Card.Text style={{fontSize:'18px'}}>{postText}</Card.Text>}
                
                <br></br>
                <Card.Subtitle style={{fontSize:'12px'}}>Postr'd from {locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,19)}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {numLikes} Like{numLikes==1?'':'s'}
                {userAccess && editable ? <Button className="" onClick={()=>onEdit(id)} variant='dark'>{editingToggle ? 'Done Editing' : 'Edit Post'}</Button> : <></>}
                {userAccess && editable ? <Button className="" onClick={()=>handleDelete(id)} variant='dark'>Delete Post</Button> : <></>}
                {!userAccess && editable ? <Button onClick={()=>handleLike(liked, id)} size="sm" variant={liked ? 'danger' : 'black'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>}
            </Card.Footer>
        </Card>
    )
}

export default Post;