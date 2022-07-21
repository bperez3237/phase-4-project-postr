import React from "react";
import { useState, useEffect } from "react";
import {Card, ListGroup} from 'react-bootstrap'

function Account({user_id}) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
        fetch(`/user-info/${user_id}`)
            .then(r=>r.json())
            .then((data)=>setUserInfo(data))
    },[])
    console.log(userInfo.posts[0])

    if (!userInfo) return <></>
    else {return (
        <Card>
            <Card.Body>
                <Card.Title>{userInfo.username}</Card.Title>
                <Card.Subtitle>{userInfo.name}</Card.Subtitle>
                <Card.Text>
                    Last Post: {userInfo.posts[0].text}
                </Card.Text>
                <ListGroup>
                    <ListGroup.Item>Number of Locations visited: {userInfo.locations.length}</ListGroup.Item>
                    <ListGroup.Item>Numbr of Posts: {userInfo.posts.length}</ListGroup.Item>
                    <ListGroup.Item>Joined Postr on: {userInfo.created_at.slice(0,10)} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )}
}

export default Account;