import React from 'react'
import { MdHistoryEdu } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function FeedHeading({url, setPathState}) {

    const history = useHistory()

    return (
        <div className='profile-feed-heading'>
            <div className='option' onClick={()=>{
                    setPathState('posts')
                    history.push(`${url}`)
                }}>
                    <h4>Posts</h4>
            </div>
            <div className='option' onClick={()=>{
                    setPathState('with_replies')
                    history.push(`${url}/with_replies`)
                }}>
                    <h4>Posts & Replies</h4>
            </div>
            <div className='option' onClick={()=>{
                    setPathState('media')
                    history.push(`${url}/media`)
                }}>
                    <h4>Media</h4>
            </div>
            <div className='option' onClick={()=>{
                    setPathState('likes')
                    history.push(`${url}/likes`)
                }}>
                    <h4>Likes</h4>
            </div>
        </div>
    )
}

export default FeedHeading