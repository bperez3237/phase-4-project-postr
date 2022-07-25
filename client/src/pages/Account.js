import React from "react";
import { useState, useEffect } from "react";
import {Card, Container, ListGroup, Row, Accordion} from 'react-bootstrap'

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
                            {/* Last Post: {userInfo.posts[0].text} */}
                            <br></br>
                            Joined Postr on: {userInfo.created_at.slice(0,10)}
                        </Card.Text>
                        <br></br>
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
                            </Accordion>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )}
}

export default Account;