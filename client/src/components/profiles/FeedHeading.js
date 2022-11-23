import React from 'react'
import { MdHistoryEdu } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function FeedHeading({path, setPathState}) {

    const history = useHistory()

    return (
        <div className='profile-feed-heading'>
            <div className='option' onClick={()=>{
                setPathState('posts')
                history.push(`${path}`)
                }}><h4>Posts</h4></div>
            <div className='option' onClick={()=>{
                setPathState('with_replies')
                history.push(`${path}/with_replies`)
                }}><h4>Posts & Replies</h4></div>
            <div className='option' onClick={()=>{
                setPathState('media')
                history.push(`${path}/media`)
                }}><h4>Media</h4></div>
            <div className='option' onClick={()=>{
                setPathState('likes')
                history.push(`${path}/likes`)
                }}><h4>Likes</h4></div>
        </div>
    )
}

export default FeedHeading