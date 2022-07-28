import React from "react";
import {Button, Card} from 'react-bootstrap'

function Post({id, username, text, locationName, createdAt, userAccess, editable, numLikes, liked, handleLike, handleDelete}) {


    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Title>{username} says:</Card.Title>
                <br></br>
                <Card.Text style={{fontSize:'18px'}}>{text}</Card.Text>
                <br></br>
                <Card.Subtitle style={{fontSize:'12px'}}>Postr'd from {locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,19)}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {numLikes} Like{numLikes==1?'':'s'}
                {userAccess && editable ? <Button className="" onClick={()=>handleDelete(id)} variant='dark'>Delete Post</Button> : <></>}
                {!userAccess && editable ? <Button onClick={()=>handleLike(liked, id)} size="sm" variant={liked ? 'danger' : 'black'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>}
            </Card.Footer>
        </Card>
    )
}

export default Post;