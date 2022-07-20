import React from "react";
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList({location, username}) {

    const postElements = location.posts.map((post)=><Post key={post.id} post={post} location={location.name} username={username}></Post>)

    return (
        <Container className="m-3" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;