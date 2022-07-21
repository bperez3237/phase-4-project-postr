import React from "react";
import {Card} from 'react-bootstrap'

function Location({location, setLocation, selected, setSelectedId}) {
    function handleClick() {
        setLocation(location)
        setSelectedId(location.id)
    }

    const style = {
        borderStyle: 'solid',
        borderColor: selected ? 'red' : 'black'
    }

    return (
        <Card className="m-4" onClick={handleClick} style={style}>
            <Card.Header>{location.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {location.country}<br></br>
                    {location.coordinates}
                </Card.Text>
            </Card.Body>
        </Card>
    )


}

export default Location;