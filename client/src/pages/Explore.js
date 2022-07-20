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

    console.log(location)
    return (

        <Container>
            <Row>
                <Col>
                    {allLocations ? <LocationList locations={allLocations} setLocation={setLocation}></LocationList> : <></>}
                </Col>
                <Col>
                    {location ? <PostList location={location} name={user.name}></PostList> : <></>}
                </Col>
            </Row>
        </Container>
    )


}

export default Explore;