import React from "react";
import {Container, ListGroup} from 'react-bootstrap'

function UserInfo({user}) {

    return (
        <Container className='m-3' style={{borderStyle:'solid'}}>
            <ListGroup>
                <ListGroup.Item>{user.username}</ListGroup.Item>
                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>User Since: {user.created_at.slice(0,10)}</ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default UserInfo;