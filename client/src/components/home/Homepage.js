import React from "react";
import PostList from "../post/PostList";
import { useEffect } from "react";
import HomeHeading from "./HomeHeading";
import './Home.css'
import NewPost from "./NewPost";

function Homepage({location, user, posts, setPosts}) {

    useEffect(()=>{
        fetch(`/locations/${location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[location])


    return (
        <div className="Feed">
            <HomeHeading />
            <NewPost user={user} location={location} setPosts={setPosts}/>
            <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts}></PostList>
        </div>
    )
}

export default Homepage;