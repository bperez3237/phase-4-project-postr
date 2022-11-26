import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles/style.css'
import Heading from './Heading'
import Banner from './Banner'
import Feed from './Feed'

function Profile({user, location, setLocation}) {
    let {username} = useParams()
    
    return (
        <div className='profile'>
            <Heading user={user}/>
            <Banner user={user}/>
            <Feed user={user} location={location}/>
        </div>
    )
}

export default Profile