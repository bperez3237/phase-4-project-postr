import React from "react";
import {Button, Card} from 'react-bootstrap'

function Post({post, location, setLocation, username, access}) {

    function handleDelete() {
        fetch(`/posts/${post.id}`,{
            method: 'DELETE'
        })
            .then((r=>r.json()))
            .then((location)=>setLocation(location))
    }

    function handleLike(){
        console.log('like')
        const updateLikesObj = {...post}
        console.log(updateLikesObj)
        // fetch(`/posts/${post.id}`,{
        //     method:"PATCH",
        //     headers: {
        //         'Content-type': "application/json",
        //     },
        //     body: JSON.stringify(updateLikesObj),
        // })
        //     .then(r=>r.json())
        //     .then((location)=>setLocation(location))
    }

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Subtitle>{username} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                {access ? <Button onClick={handleLike} variant='danger'>Like Post</Button> : <></>}
                <Card.Subtitle>Postr'd from {location.name}</Card.Subtitle>
                {access ? <Button onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>}
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;