import React from "react";
import PostList from "../PostList";
import {Container, Row, Col} from 'react-bootstrap'
import NewPost from '../NewPost'
import LocationInfo from '../LocationInfo'
import UserInfo from '../UserInfo'
import { useEffect, useState } from "react";

function Homepage({location, user}) {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch(`/locations/${location.id}/posts`)
            .then(r=>r.json())
            .then(data=>setPosts(data))
    },[])

    return (
        <Container className="fluid">
            <Row>
                <Col className="col-4 p-3">
                    <Row className="">
                        <LocationInfo location={location}></LocationInfo>
                    </Row>
                    <Row className="mt-4">
                        <NewPost locationId={location.id} userId={user.id} setPosts={setPosts}></NewPost>
                    </Row>
                    <Row className="mt-4">
                        <UserInfo user={user}></UserInfo>
                    </Row>
                </Col>
                <Col className="col-8 p-3">
                    <PostList location={location} currentUser={user} editable={true} posts={posts} setPosts={setPosts}></PostList>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;