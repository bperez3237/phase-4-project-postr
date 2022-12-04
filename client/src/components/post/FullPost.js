import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import useGet from '../../hooks/useGet'

function FullPost() {

    let {post_id} = useParams()
    const {data: post} = useGet(`/posts/${post_id}`)
    const { id, user, location, text, created_at } = post
    
    return (
        <div>FullPost</div>
    )
}

export default FullPost