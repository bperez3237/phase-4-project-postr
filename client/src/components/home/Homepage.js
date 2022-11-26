import React from "react";
import PostList from "../post/PostList";
import { useEffect } from "react";
import HomeHeading from "./HomeHeading";
import './Home.css'
import HeadingNewPost from "./HeadingNewPost";

function Homepage({location, user, posts, setPosts}) {

    useEffect(()=>{
        fetch(`/locations/${location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[location])


    return (
        <div className="Feed">
            <HomeHeading />
            <HeadingNewPost setPosts={setPosts} user={user} location={location}/>
            <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts}></PostList>
        </div>
    )
}

export default Homepage;