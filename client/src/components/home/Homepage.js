import React from "react";
import PostList from "../post/PostList";
import { useEffect } from "react";
import HomeHeading from "./HomeHeading";
import './Home.css'
import NewPost from "../post/NewPost";

function Homepage({login, posts, setPosts}) {

    useEffect(()=>{
        fetch(`/locations/${login.location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[login, setPosts])


    return (
        <div className="Feed">
            <HomeHeading />
            <NewPost posts={posts} setPosts={setPosts}/>
            <PostList login={login} editable={true} posts={posts} setPosts={setPosts}></PostList>
        </div>
    )
}

export default Homepage;