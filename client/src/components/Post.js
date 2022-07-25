import React from "react";
import {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'

function Post({post, location, setLocation, userAccess, currentUser, editable}) {
    const [liked, setLiked] = useState(!post.likes.find((like)=>like.user_id==currentUser.id) ? true : false)

    // useEffect(()=>{
    //     setLiked(!post.likes.find((like)=>like.user_id==currentUser.id) ? true : false)
    // },liked)
    // const result = !post.likes.find((like)=>like.user_id==currentUser.id)
    // console.log(result)


    // console.log(post.likes)
    // console.log(currentUser)

    function handleDelete() {
        fetch(`/posts/${post.id}`,{
            method: 'DELETE'
        })
            .then((r=>r.json()))
            .then((location)=>setLocation(location))
    }

    function handleLike(){
        // const updateLikesObj = {id: post.id, change_likes: !liked ? 1 : -1}
        // fetch(`/posts/${post.id}`,{
        //     method:"PATCH",
        //     headers: {
        //         'Content-type': "application/json",
        //     },
        //     body: JSON.stringify(updateLikesObj),
        // })
        //     .then(r=>r.json())
        //     .then((location)=>setLocation(location))

        // console.log(post.likes.forEach(postLike=> {
        //     console.log(postLike, like)
        //     return postLike==like
        // }))
        
        // const isLiked = like ? true : false
        if (!like) {
            fetch(`/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({user_id: currentUser.id, post_id: post.id})
                })
                    .then(r=>r.json())
                    .then((like)=>setLike(like))
        }
        else {
            console.log('run DELETE')
        }
        setLike(!like)


        
    }

    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Title>{post.user.username} says:</Card.Title>
                <br></br>
                <Card.Text style={{fontSize:'18px'}}>{post.text}</Card.Text>
                <br></br>
                <Card.Subtitle style={{fontSize:'12px'}}>Postr'd from {location.name} - {post.created_at.slice(0,10)} - {post.created_at.slice(11,19)}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {post.likes.length} Like{post.likes.length==1?'':'s'}
                {/* {userAccess && editable ? <Button className="" onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>} */}
                {!userAccess && editable ? <Button onClick={handleLike} size="sm" variant={like ? 'danger' : 'black'}>{like ? 'Unlike' : 'Like'} Post</Button> : <></>}
            </Card.Footer>
        </Card>
    )


}

export default Post;