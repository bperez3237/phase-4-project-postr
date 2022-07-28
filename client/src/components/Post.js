import React from "react";
import {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'

function Post({id, username, text, locationName, createdAt, userAccess, editable, numLikes, liked, handleLike, handleDelete}) {
    // const [liked, setLiked] = useState(false)
    // const [post,setPost] = useState(null)
    // const [post, setPost] = posts.filter((post)=>post.id==id)[0]
    // const post = posts.filter((post)=>post.id==id)[0]

    // useEffect(()=>{
    //     console.log(' run use effect ')
    //     // fetch(`/locations/${location.id}/posts/${id}`)
    //     //     .then(r=>r.json())
    //     //     .then(data=>setPost(data))
    //     let result = false
    //     setPost(posts.filter((elem)=>elem.id==id)[0])
    //     posts.filter((elem)=>elem.id==id)[0].likes.forEach((like)=>{
    //                 result = result || like.user_id==currentUser.id
    //                 setLiked(result)
    //             })

    // },[ posts, liked])


    // useEffect(()=>{
    //     let result = false
    //     posts.filter((post)=>post.id==id)[0].likes.forEach((like)=>{
    //         result = result || like.user_id==currentUser.id
    //         setLiked(result)
    //     })
    // },[liked, posts])
    // const result = !post.likes.find((like)=>like.user_id==currentUser.id)
    // console.log(result)


    // console.log(post.likes)
    // console.log(currentUser)

    
    // function handleDelete() {
    //     fetch(`/posts/${post.id}`,{
    //         method: 'DELETE'
    //     })
    //         .then((r=>r.json()))
    //         .then((location)=>setLocation(location))
    // }

    // function handleLike(){
    //     // const updateLikesObj = {id: post.id, change_likes: !liked ? 1 : -1}
    //     // fetch(`/posts/${post.id}`,{
    //     //     method:"PATCH",
    //     //     headers: {
    //     //         'Content-type': "application/json",
    //     //     },
    //     //     body: JSON.stringify(updateLikesObj),
    //     // })
    //     //     .then(r=>r.json())
    //     //     .then((location)=>setLocation(location))

    //     // console.log(post.likes.forEach(postLike=> {
    //     //     console.log(postLike, like)
    //     //     return postLike==like
    //     // }))
        
    //     // const isLiked = like ? true : false
    //     if (!liked) {
    //         console.log('liked here')
    //         fetch(`/likes`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //                 body: JSON.stringify({user_id: currentUser.id, post_id: post.id})
    //             })
    //                 .then(r=>r.json())
    //                 .then((updatedPosts)=>{
    //                     console.log(updatedPosts)
    //                     setPosts(updatedPosts)
    //                 })
    //             setLiked(true)
    //     }
    //     else {
    //         console.log('unliked here')
    //         const like_id = post.likes.filter((like)=>like.user_id==currentUser.id)[0].id
    //         fetch(`/likes/${like_id}`,{
    //             method:'DELETE',
    //         })
    //             .then(r=>r.json())
    //             .then((updatedPosts)=>{
    //                 console.log(updatedPosts)
    //                 setPosts(updatedPosts)
    //             })
    //         setLiked(false)
    //     }
    //     // console.log(`liked is ${liked}`)


        
    // }
    return (
        <Card className='m-4'>
            <Card.Body>
                <Card.Title>{username} says:</Card.Title>
                <br></br>
                <Card.Text style={{fontSize:'18px'}}>{text}</Card.Text>
                <br></br>
                <Card.Subtitle style={{fontSize:'12px'}}>Postr'd from {locationName} - {createdAt.slice(0,10)} - {createdAt.slice(11,19)}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                {numLikes} Like{numLikes==1?'':'s'}
                {userAccess && editable ? <Button className="" onClick={handleDelete} variant='dark'>Delete Post</Button> : <></>}
                {!userAccess && editable ? <Button onClick={()=>handleLike(liked, id)} size="sm" variant={liked ? 'danger' : 'black'}>{liked ? 'Unlike' : 'Like'} Post</Button> : <></>}
            </Card.Footer>
        </Card>
    )
}

export default Post;