import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles/style.css'
import Heading from './Heading'
import Banner from './Banner'
import Feed from './Feed'

function Profile({user}) {
    let {username} = useParams()
    console.log(username)

    useEffect(()=>{
        fetch(`/users/${username}`)
        .then(r=>r.json())
        .then(data=>console.log(data))
    },[])

    
    return (
        <div className='profile'>
            <Heading user={user}/>
            <Banner user={user}/>
            <Feed user={user}/>
        </div>
    )
}

export default Profile