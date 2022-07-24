import React from "react";
import {useState} from 'react'
import {Button, Card} from 'react-bootstrap'

function Post({post, location, setLocation, username, userAccess, editable}) {
    const [liked, setLiked] = useState(false)

    function handleDelete() {
        fetch(`/posts/${post.id}`,{
            method: 'DELETE'
        })
            .then((r=>r.json()))
            .then((location)=>setLocation(location))
    }

    function handleLike(){
        const updateLikesObj = {id: post.id, change_likes: !liked ? 1 : -1}
        fetch(`/posts/${post.id}`,{
            method:"PATCH",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(updateLikesObj),
        })
            .then(r=>r.json())
            .then((location)=>setLocation(location))
        setLiked(!liked)
    }

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Title>{username} says:</Card.Title>
                <br></br>
                <Card.Text style={{fontSize:'18px'}}>{post.text}</Card.Text>
                <br></br>
                <Card.Subtitle style={{fontSize:'12px'}}>Postr'd from {location.name} - {post.created_at.slice(0,10)} - {post.created_at.slice(11,19)}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {post.likes} Like{post.likes>1?'s':''}
                {userAccess && editable ? <Button className="" onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>}
                {!userAccess && editable ? <Button onClick={handleLike} size="sm" variant={liked ? 'danger' : 'light'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>}
            </Card.Footer>
        </Card>
    )


}

export default Post;