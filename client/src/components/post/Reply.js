import React from 'react'
import useGet from '../../hooks/useGet'
import PostFooter from './PostFooter'

function Reply({reply, atUser}) {
    const { text_content, created_at} = reply
    const { data: user } = useGet(`/users/${reply.user_id}`)
    return (
        <div className='reply'>
            <div className='profile-pic'>
                <img className='pic' src={user?.avatar} alt='user profile'/>
            </div>
            <div className='reply-body'>
                <div className='reply-header'>
                    <p>{user.name}<span> @{user.username}{' · '}{created_at.slice(0,10)}</span></p>
                    <p><span>Replying to </span><span>@{atUser}</span></p>
                </div>
                <p className='text-content'>{text_content}</p>
            </div>  
        </div>
    )
}

export default Reply