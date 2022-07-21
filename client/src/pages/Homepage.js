import React from "react";
import PostBar from "../components/PostBar";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'

function Homepage({location, user, setLocation}) {

    return (
        <Container className="fluid">
            <Row>
                <Col className="col-4 p-3">
                    <PostBar location={location} user={user} setLocation={setLocation}></PostBar>
                </Col>
                <Col className="col-8 p-3">
                    <PostList location={location} currentUser={user} setLocation={setLocation} editable={true}></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;