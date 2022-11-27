import React from 'react'
import './styles/style.css'
import Heading from './Heading'
import Banner from './Banner'
import Feed from './Feed'

function Profile({login}) {
    
    return (
        <div className='profile'>
            <Heading user={login.user}/>
            <Banner user={login.user}/>
            <Feed login={login}/>
        </div>
    )
}

export default Profile