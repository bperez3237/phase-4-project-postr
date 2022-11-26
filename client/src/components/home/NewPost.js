import React from "react";
import {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import RoundButton from "./RoundButton";

function NewPost({user, location, setPosts, setToggleNewPost}) {
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
                user_id: user.id,
                location_id: location.id,
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
        <div className='popup-new-post'>
            <div className='profile-pic'>
                <div className='pic'></div>
            </div>
            <form className='post-form'>
                <input plceholder="What's happening" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <RoundButton type="submit" text={text} setText={setText} setPosts={setPosts} user={user} location={location}/>
            </form>
        </div>
    )
}

export default NewPost;