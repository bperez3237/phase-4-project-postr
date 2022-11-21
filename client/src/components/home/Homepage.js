import React from "react";
import PostList from "../post/PostList";
import {Container, Row, Col} from 'react-bootstrap'
import NewPost from './NewPost'
import LocationInfo from '../LocationInfo'
import UserInfo from '../UserInfo'
import { useEffect, useState } from "react";
import HomeHeading from "./HomeHeading";
import './Home.css'
import HeadingNewPost from "./HeadingNewPost";

function Homepage({location, setLocation, user, posts, setPosts}) {
    // const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(`/locations/${location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[])

    return (
        <div className="Feed">
            <HomeHeading />
            <HeadingNewPost posts={posts} setPosts={setPosts} user={user} location={location}/>
            <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts}></PostList>
        </div>
    )
}

export default Homepage;