import React from "react";
import {Container, Row, Col, Card, ListGroup, Image} from 'react-bootstrap'

function LocationInfo({location}) {

    return (
        <Container className='h-25 d-inline-block m-1' style={{borderStyle:'solid'}}>
            <Row>
                <Col className="col-6">
                    <Image ></Image>
                </Col>
                <Col className="col-6">
                    <Card>
                        <Card.Header>{location.name}</Card.Header>
                        <ListGroup>
                            <ListGroup.Item>Country: {location.country}</ListGroup.Item>
                            <ListGroup.Item>{location.coordinates}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LocationInfo;