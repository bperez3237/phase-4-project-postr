import React from "react";
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList({location, currentUser}) {

    const postElements = location.posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        return <Post 
        key={post.id} 
        post={post} 
        location={location.name} 
        username={post.username} 
        access={currentUser.username==post.username ? true : false}></Post>}
        )

    return (
        <Container className="h-100" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;