import React from "react";
import { useState } from "react";
import {Card, Container} from 'react-bootstrap'
import Location from './Location'

function LocationList({locations, setLocation}) {
    const [selectedId, setSelectedId] = useState('')

    const locationsElements = locations.map((location)=>{
        return <Location 
        key={location.id} 
        location={location} 
        setLocation={setLocation} 
        selected={location.id==selectedId ? true : false} 
        setSelectedId={setSelectedId}/>
    })

    return (
       <Container className='h-100' style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {locationsElements}
       </Container>
    )
}

export default LocationList;