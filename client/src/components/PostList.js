import React from "react";
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList({location, username: name}) {

    const postElements = location.posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        // console.log(Date.parse(post.created_at))
        return <Post key={post.id} post={post} location={location.name} name={name}></Post>}
        )

    return (
        <Container className="m-3" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;