import React from "react";
import {Container, ListGroup} from 'react-bootstrap'

function UserInfo() {

    return (
        <Container className='m-3' style={{borderStyle:'solid'}}>
            <ListGroup>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default UserInfo;