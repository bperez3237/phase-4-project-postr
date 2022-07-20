import React from "react";
import {Container} from 'react-bootstrap'
import NewPost from './NewPost'
import LocationInfo from './LocationInfo'
import UserInfo from './UserInfo'

function PostBar({user, location, setLocation}) {

    return (
        <Container className='d-flex flex-column m-3' style={{borderStyle:'solid', maxHeight:'900px'}}>
            <LocationInfo location={location}></LocationInfo>
            <NewPost locationId={location.id} userId={user.id} setLocation={setLocation}></NewPost>
            <UserInfo user={user}></UserInfo>
        </Container>
    )


}

export default PostBar;