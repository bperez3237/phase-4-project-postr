import React from "react";
import {Container, ListGroup} from 'react-bootstrap'

function UserInfo({user}) {

    return (
        <Container className='h-25 d-inline-block' style={{borderStyle:'solid'}}>
            <ListGroup>
                <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>User Since: {user.created_at.slice(0,10)}</ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default UserInfo;