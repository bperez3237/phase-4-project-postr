import React from "react";
import {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

function NewPost({userId, locationId, setLocation}) {
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                location_id: locationId,
                text: text
            })
        })
            .then((r)=>r.json())
            .then((location)=>{
                setText('')
                setLocation(location)
            })
    }

    return (
        <Form className='' style={{borderStyle:'solid', height: '300px'}}>
            <Form.Group className='h-75'>
                <Form.Label as='h4'>New Post Here:</Form.Label>
                <Form.Control value={text} type='text' onChange={handleChange} className="h-75"></Form.Control>
            </Form.Group>
            <Button variant='dark' type='submit' onClick={handleSubmit}>POST!</Button>
        </Form>
    )
}

export default NewPost;