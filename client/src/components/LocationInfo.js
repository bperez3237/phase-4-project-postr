import React from "react";
import {Container, Row, Col, Card, ListGroup, Image} from 'react-bootstrap'

function LocationInfo({location}) {

    return (
        <Container className='m-3' style={{borderStyle:'solid'}}>
            <Row>
                <Col>
                    <Image ></Image>
                </Col>
                <Col>
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