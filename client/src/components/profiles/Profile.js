import React from 'react'
import './styles/style.css'
import Heading from './Heading'
import Banner from './Banner'
import Feed from './Feed'
import {useParams} from 'react-router-dom'
import useGet from '../../hooks/useGet'

function Profile() {
    let {username} = useParams()

    const [pathState, setPathState] = React.useState('posts')
    const {data: posts, setData: setPosts, error} = useGet(`/users/${username}/${pathState}`)
  
    if (posts.length === 0) {
        return <div>nothing</div>
    }
    else {return (
        <div className='profile'>
            <Heading username={username}/>
            <Banner user={posts[0].user}/>
            <Feed pathState={pathState} setPathState={setPathState} posts={posts} setPosts={setPosts}/>
        </div>
    )}
}

export default Profile