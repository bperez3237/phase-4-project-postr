import React from "react";
import {Card} from 'react-bootstrap'

function Post({post, name, location}) {

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Subtitle>{name} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                <Card.Subtitle>Postr'd from {location}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;