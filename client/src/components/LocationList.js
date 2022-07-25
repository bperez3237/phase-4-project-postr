import React from "react";
import { useState } from "react";
import {Card, Container, ListGroup} from 'react-bootstrap'
import Location from './Location'

function LocationList({locations, setLocation}) {
    const [selectedId, setSelectedId] = useState(locations[0].id)

    function handleClick(location) {
        setLocation(location)
        setSelectedId(location.id)
    }

    const locationsElements = locations.map((location)=> {
        return <ListGroup.Item 
        key={location.id}
        onClick={()=>handleClick(location)} 
        style={{
            borderStyle: 'solid',
            backgroundColor: (location.id===selectedId) ? '#4285F4' : 'white',
            color: (location.id===selectedId) ? 'white' : 'black'
        }}
        >{location.name}</ListGroup.Item>
    })

    return (
       <Container className='' style={{borderStyle:'solid', maxHeight:'500px', overflow: 'scroll'}}>
            <h4 className="sticky-top" style={{backgroundColor:'white'}}>Locations:</h4>
            <ListGroup>{locationsElements}</ListGroup>
       </Container>
    )
}

export default LocationList;