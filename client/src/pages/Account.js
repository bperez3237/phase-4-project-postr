import React from "react";
import { useState, useEffect } from "react";
import {Card, Container, ListGroup, Row} from 'react-bootstrap'

function Account({user_id}) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(()=>{
        fetch(`/user-info/${user_id}`)
            .then(r=>r.json())
            .then((data)=>setUserInfo(data))
    },[])

    if (!userInfo) return <></>
    else {return (
        <Container className="d-flex justify-content-center">
            <Row className="m-4">
                <Card className="">
                    <Card.Body>
                        <Card.Title as='h1'>{userInfo.username}</Card.Title>
                        <Card.Subtitle as='h2'>{userInfo.name}</Card.Subtitle>
                        <br></br>
                        <Card.Text>
                            Last Post: {userInfo.posts[0].text}
                        </Card.Text>
                        <br></br>
                        <ListGroup>
                            <ListGroup.Item>Number of Locations Posted at: {userInfo.locations.length}</ListGroup.Item>
                            <ListGroup.Item>Numbr of Posts: {userInfo.posts.length}</ListGroup.Item>
                            <ListGroup.Item>Joined Postr on: {userInfo.created_at.slice(0,10)} </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )}
}

export default Account;