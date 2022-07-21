import React from "react";
import {Button, Card} from 'react-bootstrap'

function Post({post, location, username, access}) {

    function handleDelete() {
        console.log('delete')
    }

    function handleLike(){
        console.log('like')
    }

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Subtitle>{username} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                {access ? <Button onClick={handleLike} variant='danger'>Like Post</Button> : <></>}
                <Card.Subtitle>Postr'd from {location}</Card.Subtitle>
                {access ? <Button onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>}
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;