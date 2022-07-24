import React from "react";
import {Container, Row, Col, Card, ListGroup, Image} from 'react-bootstrap'

function LocationInfo({location}) {

    return (
        <Container className='' style={{borderStyle:'solid'}}>
            <Card size='sm'>
                <Card.Header>{location.name}</Card.Header>
                <ListGroup>
                    <ListGroup.Item>Country: {location.country}</ListGroup.Item>
                    <ListGroup.Item>{location.coordinates}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default LocationInfo;