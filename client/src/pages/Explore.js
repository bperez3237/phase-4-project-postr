import React from "react";
import {useState, useEffect} from 'react'
import LocationList from "../components/LocationList";
import PostList from "../components/PostList";
import {Container, Row, Col} from 'react-bootstrap'

function Explore({user}) {
    const [location, setLocation] = useState(null)
    const [allLocations, setAllLocations] = useState([])

    useEffect(()=>{
        fetch(`/locations`)
            .then((r)=>r.json())
            .then((locations)=> {
                setLocation(locations[0])
                setAllLocations(locations)
            })
    },[])

    return (

        <Container className="fluid">
            <Row>
                <Col className="h-100 col-4 p-3">
                    {allLocations ? <LocationList locations={allLocations} setLocation={setLocation}></LocationList> : <></>}
                </Col>
                <Col className="col-8 p-3">
                    {location ? <PostList location={location} currentUser={user} setLocation={setLocation} /> : <></>}
                </Col>
            </Row>
        </Container>
    )


}

export default Explore;