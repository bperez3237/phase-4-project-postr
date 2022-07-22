import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import NewPost from './NewPost'
import LocationInfo from './LocationInfo'
import UserInfo from './UserInfo'

function PostBar({user, location, setLocation}) {

    return (
        <Container className='fluid' style={{borderStyle:'solid',maxHeight:'1000px'}}>
            <Row className="">
                <LocationInfo location={location}></LocationInfo>
            </Row>
            <Row className="">
                <NewPost locationId={location.id} userId={user.id} setLocation={setLocation}></NewPost>
            </Row>
            <Row className="">
                <UserInfo user={user}></UserInfo>
            </Row>
        </Container>
    )


}

export default PostBar;