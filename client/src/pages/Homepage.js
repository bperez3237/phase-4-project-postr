import React from "react";
import PostBar from "../components/PostBar";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'

function Homepage({location, username}) {

    return (
        <Container>
            <Row >
                <Col>
                    <PostBar></PostBar>
                </Col>
                <Col>
                    <PostList location={location} username={username}></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;