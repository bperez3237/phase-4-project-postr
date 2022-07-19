import React from "react";
import {Card} from 'react-bootstrap'

function Post({post}) {

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Subtitle>{post.user.username} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                <Card.Subtitle>Postr'd from {post.location.name}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;