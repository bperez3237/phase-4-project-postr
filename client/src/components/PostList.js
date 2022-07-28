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
    },[])



    function handleLike(liked, postId) {
        console.log(`like ${liked}`)
        if (!liked) {
            console.log('liked here')
            fetch(`/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({user_id: currentUser.id, post_id: postId, location_id: location.id})
                })
                    .then(r=>r.json())
                    .then((updatedPosts)=>{
                        console.log(updatedPosts)
                        setPosts(updatedPosts)
                    })
        }
        else {
            console.log('unliked here')
            const post = posts.filter((elem)=>elem.id==postId)[0]
            const like_id = post.likes.filter((like)=>like.user_id==currentUser.id)[0].id
            fetch(`/likes/${like_id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({location_id: location.id})
            })
                .then(r=>r.json())
                .then((updatedPosts)=>{
                    console.log(updatedPosts)
                    setPosts(updatedPosts)
                })
        }
    }

    function handleDelete() {

        console.log('delete')
        // fetch(`/posts/${post.id}`,{
        //     method: 'DELETE'
        // })
        //     .then((r=>r.json()))
        //     .then((location)=>setLocation(location))
    }



    const postElements = posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        return <Post 
        key={post.id} 
        id={post.id} 
        username={post.user.username}
        text={post.text}
        locationName={location.name}
        createdAt={post.created_at}
        userAccess={currentUser.id==post.user.id ? true : false}
        editable={editable}
        numLikes={post.likes.length}
        liked={Boolean(post.likes.find((like)=>like.user_id==currentUser.id))}
        handleLike={handleLike}
        handleDelete={handleDelete}
        />}
        )

    return (
        <Container className="fluid" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {location ? postElements : <></>}
        </Container>
    )


}

export default PostList;