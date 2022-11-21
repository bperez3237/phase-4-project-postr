import React from "react";
import { useState, useEffect } from "react";
import {Card, Container, Row, Accordion} from 'react-bootstrap'

function Account({user_id}) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
        fetch(`/user-info/${user_id}`)
            .then(r=>r.json())
            .then((data)=>setUserInfo(data))
    },[])

    if (!userInfo) return <></>
    else {return (
        <div className="">
            <h1>{userInfo.user.username}</h1>
            <h2>{userInfo.user.name}</h2>
            <p>Joined Postr on: {userInfo.user.created_at.slice(0,10)}</p>
            <Accordion >
            <Accordion.Item eventKey='0'>
                <Accordion.Header>
                    Number of Locations Posted at: {userInfo.locations.length}
                </Accordion.Header>
                <Accordion.Body>
                    {userInfo.locations.map((location)=><p key={location.id}>{location.name}</p>)}
                </Accordion.Body>                        
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>Numbr of Posts: {userInfo.posts.length}</Accordion.Header>
                <Accordion.Body>
                    {userInfo.posts.map((post)=><p key={post.id}>{post.text}</p>)}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header>Liked Posts: {userInfo.liked_posts.length}</Accordion.Header>
                <Accordion.Body>
                    {userInfo.liked_posts.map((post)=><p key={post.id}>{post.text}</p>)}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>        
        </div>
    )}
}

export default Account;