import React from "react";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'
import NewPost from '../components/NewPost'
import LocationInfo from '../components/LocationInfo'
import UserInfo from '../components/UserInfo'

function Homepage({location, user, setLocation}) {

    return (
        <Container className="fluid">
            <Row>
                <Col className="col-4 p-3">
                    <Row className="">
                        <LocationInfo location={location}></LocationInfo>
                    </Row>
                    <Row className="mt-4">
                        <NewPost locationId={location.id} userId={user.id} setLocation={setLocation}></NewPost>
                    </Row>
                    <Row className="mt-4">
                        <UserInfo user={user}></UserInfo>
                    </Row>
                </Col>
                <Col className="col-8 p-3">
                    <PostList location={location} currentUser={user} setLocation={setLocation} editable={true}></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;