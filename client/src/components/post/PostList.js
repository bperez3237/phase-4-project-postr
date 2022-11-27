import React from "react";
import Post from './Post'
import './Post.css'



function PostList({posts, setPosts, login, editable}) {

    function handleLike(liked, postId) {
        if (!liked) {
            fetch(`/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({user_id: login.user.id, post_id: postId, location_id: login.location.id})
                })
                    .then(r=>r.json())
                    .then((updatedPosts)=>{
                        setPosts(updatedPosts)
                    })
        }
        else {
            const post = posts.filter((elem)=>elem.id===postId)[0]
            const like_id = post.likes.filter((like)=>like.user_id===login.user.id)[0].id
            fetch(`/likes/${like_id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({location_id: login.location.id})
            })
                .then(r=>r.json())
                .then((updatedPosts)=>{
                    setPosts(updatedPosts)
                })
        }
    }

    function handleDelete(postId) {
        fetch(`/posts/${postId}`,{
            method: 'DELETE'
        })
            .then((r=>r.json()))
            .then((posts)=>setPosts(posts))
    }

    function handleEdit(postId, newText) {
        fetch(`/locations/${login.location.id}/posts/${postId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({text:newText})
            })
                .then(r=>r.json())
                .then((posts)=>setPosts(posts))
    }

    const postElements = posts.sort((a,b)=> Date.parse(b.created_at) - Date.parse(a.created_at)).map((post)=>{
        return <Post 
        key={post.id} 
        id={post.id} 
        currentUser={login.user}
        name={post.user?.name}
        username={post.user?.username}
        text={post.text}
        locationName={login.location.name}
        createdAt={post.created_at}
        userAccess={login.user.id===post.user.id ? true : false}
        editable={editable}
        numLikes={post.likes.length}
        liked={Boolean(post.likes.find((like)=>like.user_id===login.user.id))}
        handleLike={handleLike}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        />}
    )

    return (
        <div className="post-list">
            {postElements}
        </div>
    )
}

export default PostList;