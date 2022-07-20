import React from "react";
import {Card} from 'react-bootstrap'

function Location({location, setLocation}) {

    function handleClick() {
        setLocation(location)
    }

    return (
        <Card className="m-4" onClick={handleClick}>
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