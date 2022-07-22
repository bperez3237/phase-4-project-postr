import React from "react";
import { useState } from "react";
import {Card, Container, ListGroup} from 'react-bootstrap'
import Location from './Location'

function LocationList({locations, setLocation}) {
    const [selectedId, setSelectedId] = useState(locations[0].id)
    const [selectedLocation, setSelectedLocation] = useState(locations[0])



    // const locationsElements = locations.map((location)=>{
    //     return <Location 
    //     key={location.id} 
    //     location={location} 
    //     setLocation={setLocation} 
    //     selected={location.id==selectedId ? true : false} 
    //     setSelectedId={setSelectedId}/>
    // })


    function handleClick(location) {
        // const clicked_location_id = event.target.__reactProps$k3fizsqp1t.value
        // console.log(e.target)
        // console.log(location)
        // console.log(event.target.props)
        // const location = locations.filter((location)=> location.id==clicked_location_id)
        // console.log(location[0])
        setLocation(location)
        setSelectedId(location.id)
    }

    const locationsElements = locations.map((location)=> {
        return <ListGroup.Item 
        key={location.id}
        onClick={()=>handleClick(location)} 
        // value={location.id}
        style={{
            borderStyle: 'solid',
            backgroundColor: (location.id==selectedId) ? 'red' : 'white'
        }}
        >{location.name}</ListGroup.Item>
    })

    return (
       <Container className='h-100' style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            <ListGroup>{locationsElements}</ListGroup>
       </Container>
    )
}

export default LocationList;