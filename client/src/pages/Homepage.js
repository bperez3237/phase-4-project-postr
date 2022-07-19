import React from "react";
import PostBar from "../components/PostBar";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'

function Homepage() {

    return (
        <Container>
            <Row >
                <Col>
                    <PostBar></PostBar>
                </Col>
                <Col>
                    <PostList></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;