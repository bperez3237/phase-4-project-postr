import React from "react";
import {useEffect, useState } from 'react'

function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        fetch('/posts')
            .then((r) => r.json())
            .then((data)=>setPosts(data))
    })

    return (
        <>
            <h1>hi</h1>
        </>
    )


}

export default PostList;