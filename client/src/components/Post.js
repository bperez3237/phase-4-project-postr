import React from "react";
import {Button, Card} from 'react-bootstrap'

function Post({post, location, username, access}) {


    return (
        <Card className='m-4'>
            <Card.Body>
                {access ? <h1>hi</h1> : <></>}
                <Card.Subtitle>{username} says:</Card.Subtitle>
                <Card.Text style={{fontSize:'20px'}}>{post.text}</Card.Text>
                <Card.Subtitle>Postr'd from {location}</Card.Subtitle>
                {access ? <Button>Delete Post</Button> : <></>}
            </Card.Body>
            <Card.Footer className='text-muted'>{post.created_at}</Card.Footer>
        </Card>
    )


}

export default Post;