import React from "react";
import { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import Post from './Post'

function PostList({location, setLocation, currentUser, editable}) {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(`/locations/${location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[posts])

    const postElements = posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        return <Post 
        key={post.id} 
        id={post.id} 
        location={location} 
        currentUser={currentUser}
        userAccess={currentUser.id==post.user.id ? true : false}
        editable={editable}
        setLocation={setLocation}
        posts={posts}
        setPosts={setPosts}
        />}
        )

    return (
        <Container className="fluid" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;