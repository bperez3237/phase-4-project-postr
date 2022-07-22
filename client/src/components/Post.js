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
                <Card.Subtitle>{username} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                <Card.Subtitle>Likes: {post.likes}</Card.Subtitle>
                {!userAccess && editable ? <Button onClick={handleLike} variant={liked ? 'danger' : 'light'}>Like Post</Button> : <></>}
                <Card.Subtitle>Postr'd from {location.name}</Card.Subtitle>
                {userAccess && editable ? <Button onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>}
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;