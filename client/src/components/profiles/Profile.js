import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {

    let params = useParams()
    console.log(params.username)

    useEffect(()=>{
        fetch(`/users/${params.username}`)
        .then(r=>r.json())
        .then(data=>console.log(data))
    },[])

    
    return (
        <div>Profile</div>
    )
}

export default Profile