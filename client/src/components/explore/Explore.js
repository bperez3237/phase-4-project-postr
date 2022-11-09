import React from "react";
import {useState, useEffect} from 'react'
import LocationList from "../LocationList";
import PostList from "../PostList";
import {Container, Row, Col, Button} from 'react-bootstrap'
import LocationInfo from "../LocationInfo"

function Explore({user}) {
    const [location, setLocation] = useState(null)
    const [posts, setPosts] = useState(null)


    useEffect(()=>{
        if (location!==null) {
            fetch(`locations/${location.id}/posts`)
                .then(r=>r.json())
                .then((posts)=>setPosts(posts))
        }
        else {
            console.log('loading')
        }
    },[location])

    return (

        <Container className="fluid">
            <Row>
                <Col className="h-50 col-4 p-3">
                    <Row>
                        <LocationList setLocation={setLocation} location={location} ></LocationList>
                    </Row>
                    <Row className='mt-4'>
                        {location ? <LocationInfo className="" location={location}></LocationInfo> : <></>}
                    </Row>
                </Col>
                <Col className="col-8 p-3">
                    {posts ? <PostList 
                    posts={posts}
                    location={location} 
                    currentUser={user} 
                    setLocation={setLocation} 
                    editable={false}/> : <></>}
                </Col>
            </Row>
        </Container>
    )


}

export default Explore;