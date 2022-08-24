import React from "react";
import {useState, useEffect} from 'react'
import LocationList from "../components/LocationList";
import PostList from "../components/PostList";
import {Container, Row, Col, Button} from 'react-bootstrap'
import LocationInfo from "../components/LocationInfo"

function Explore({user}) {
    const [location, setLocation] = useState(null)
    const [posts, setPosts] = useState(null)
    const [toggleFilter, setToggleFilter] = useState(false)


    useEffect(()=>{
        setToggleFilter(false)
        if (location!==null) {
            fetch(`locations/${location.id}/posts`)
                .then(r=>r.json())
                .then((posts)=>setPosts(posts))
        }
        else {
            console.log('loading')
        }
    },[location])

    useEffect(()=> {
        // console.log(`toggle is ${toggleFilter ? 'on' : 'off'}`)
        if (location !== null && toggleFilter == true) {
            console.log('here')
            fetch(`locations/${location.id}/four_likes`).then(r=>r.json()).then(data=>setPosts(data))
        } else if (location !== null) {
            fetch(`locations/${location.id}/posts`)
                .then(r=>r.json())
                .then((posts)=>setPosts(posts))
        }
    },[toggleFilter])

    function handleFilter() {
        setToggleFilter(!toggleFilter)
    }

    return (

        <Container className="fluid">
            <Button className='m-3' onClick={handleFilter} >{`Filter ${toggleFilter ? 'on' : 'off'}: Greater than 4 likes`}</Button>
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