import React from "react";
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList({location, setLocation, currentUser, editable}) {

    const postElements = location.posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        return <Post 
        key={post.id} 
        post={post} 
        location={location} 
        username={post.username} 
        userAccess={currentUser.username==post.username ? true : false}
        editable={editable}
        setLocation={setLocation}
        />}
        )

    return (
        <Container className="h-100" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;