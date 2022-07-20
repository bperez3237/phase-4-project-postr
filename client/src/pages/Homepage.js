import React from "react";
import PostBar from "../components/PostBar";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'

function Homepage({location, user, setLocation}) {

    return (
        <Container>
            <Row >
                <Col>
                    <PostBar location={location} user={user} setLocation={setLocation}></PostBar>
                </Col>
                <Col>
                    <PostList location={location} name={user.name}></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;