import React from "react";
import {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

function NewPost() {
    const [text, setText] = useState('')
    
    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <Form className='m-3' style={{borderStyle:'solid'}}>
            <Form.Group className='m-3'>
                <Form.Label>post here:</Form.Label>
                <Form.Control value={text} type='text' size='lg' onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button variant='dark' type='submit'>POST!</Button>
        </Form>
    )
}

export default NewPost;