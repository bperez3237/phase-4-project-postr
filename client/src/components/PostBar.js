import React from "react";
import {Container} from 'react-bootstrap'
import NewPost from './NewPost'
import LocationInfo from './LocationInfo'
import UserInfo from './UserInfo'

function PostBar() {

    return (
        <Container className='d-flex flex-column m-3' style={{borderStyle:'solid', maxHeight:'900px'}}>
            <LocationInfo></LocationInfo>
            <NewPost></NewPost>
            <UserInfo></UserInfo>
        </Container>
    )


}

export default PostBar;