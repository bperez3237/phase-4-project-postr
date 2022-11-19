import React from "react";
import {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

function NewPost({userId, locationId, setPosts, setToggleNewPost}) {
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
            .then((posts)=>{
                setText('')
                setPosts(posts)
                setToggleNewPost(false)
            })
    }

    return (
        <form className=''>
            <h4>New Post Here:</h4>
            <input value={text} type='text' onChange={handleChange} className="h-75"></input>
            <Button variant='dark' type='submit' onClick={handleSubmit}>POST!</Button>
        </form>
    )
}

export default NewPost;