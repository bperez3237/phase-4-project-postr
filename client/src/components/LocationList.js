import React from "react";
import { useState, useEffect } from "react";
import {Card, Container, ListGroup} from 'react-bootstrap'
import Location from './Location'

function LocationList({setLocation, location}) {
    // const [selectedId, setSelectedId] = useState(null)
    const [allLocations, setAllLocations] = useState([])

    useEffect(()=>{
        fetch(`/locations`)
            .then((r)=>r.json())
            .then((locations)=> {
                setLocation(locations[0])
                setAllLocations(locations)
            })
    },[])

    function handleClick(location) {
        setLocation(location)
        // setSelectedId(location.id)
    }

    const locationsElements = allLocations.map((thisLocation)=> {
        return <ListGroup.Item 
        key={thisLocation.id}
        onClick={()=>handleClick(thisLocation)} 
        style={{
            borderStyle: 'solid',
            backgroundColor: (thisLocation.id===location.id) ? '#4285F4' : 'white',
            color: (thisLocation.id===location.id) ? 'white' : 'black'
        }}
        >{thisLocation.name}</ListGroup.Item>
    })

    return (
       <Container className='' style={{borderStyle:'solid', maxHeight:'500px', overflow: 'scroll'}}>
            <h4 className="sticky-top" style={{backgroundColor:'white'}}>Locations:</h4>
            <ListGroup>{locationsElements}</ListGroup>
       </Container>
    )
}

export default LocationList;