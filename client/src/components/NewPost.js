import React from "react";
import {Button, Form} from 'react-bootstrap'

function NewPost() {

    return (
        <Form className='m-3' style={{borderStyle:'solid'}}>
            <Form.Group className='m-3'>
                <Form.Label>post here:</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Button variant='dark' type='submit'>POST!</Button>
        </Form>
    )
}

export default NewPost;