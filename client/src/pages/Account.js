import React from "react";
import { useState, useEffect } from "react";
import {Card, ListGroup} from 'react-bootstrap'

function Account({user}) {
    // console.log(user)

    useEffect(()=>{
        fetch(`/user-info/${user.id}`)
            .then(r=>r.json())
            .then((data)=>console.log(data))
    })
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Subtitle>{user.name}</Card.Subtitle>
                <ListGroup>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Account;