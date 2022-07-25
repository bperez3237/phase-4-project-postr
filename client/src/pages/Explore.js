import React from "react";
import {useState, useEffect} from 'react'
import LocationList from "../components/LocationList";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'
import LocationInfo from "../components/LocationInfo"

function Explore({user}) {
    const [location, setLocation] = useState(null)

    return (

        <Container className="fluid">
            <Row>
                <Col className="h-50 col-4 p-3">
                    <Row>
                        <LocationList setLocation={setLocation} location={location}></LocationList>
                    </Row>
                    <Row className='mt-4'>
                        {location ? <LocationInfo className="" location={location}></LocationInfo> : <></>}
                    </Row>
                </Col>
                <Col className="col-8 p-3">
                    {location ? <PostList location={location} currentUser={user} setLocation={setLocation} editable={false}/> : <></>}
                </Col>
            </Row>
        </Container>
    )


}

export default Explore;