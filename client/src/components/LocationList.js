import React from "react";
import {Card, Container} from 'react-bootstrap'
import Location from './Location'

function LocationList({locations, setLocation}) {

    const locationsElements = locations.map((location)=><Location key={location.id} location={location} setLocation={setLocation}></Location>)

    return (
       <Container className="m-3" style={{borderStyle:'solid', maxHeight:'900px', overflow: 'scroll'}}>
            {locationsElements}
       </Container>
    )
}

export default LocationList;