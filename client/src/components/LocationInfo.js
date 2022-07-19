import React from "react";
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap'

function LocationInfo() {

    return (
        <Container className='m-3' style={{borderStyle:'solid'}}>
            <Row>
                <Col>
                    image here
                </Col>
                <Col>
                    <Card>
                        <Card.Header>Header</Card.Header>
                        <ListGroup>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LocationInfo;