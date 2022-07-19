import React from "react";
import {useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('/posts')
            .then((r) => r.json())
            .then((data)=>setPosts(data))
    },[])

    const postElements = posts.map((post)=><Post></Post>)

    return (
        <Container style={{borderStyle:'solid'}}>
            {posts ? postElements : <></>}
        </Container>
    )


}

export default PostList;