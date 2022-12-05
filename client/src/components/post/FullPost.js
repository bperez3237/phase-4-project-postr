import React, {useState, useEffect, useContext} from 'react'
import { LoginContext } from '../../context/LoginContext'
import {useParams, useHistory} from 'react-router-dom'
import useGet from '../../hooks/useGet'
import {BsArrowLeft} from 'react-icons/bs'
import FullPostFooter from './FullPostFooter'
import Reply from './Reply'

function FullPost() {
    let {post_id} = useParams()
    const history = useHistory()
    const [value, setValue] = useState('')
    const {login} = useContext(LoginContext)
    const {data: post, setData: setPost} = useGet(`/posts/${post_id}`)
    const { id, user, location, text, created_at } = post
    const [replies, setReplies] = useState(post.replies)


    useEffect(() => {
        setReplies(post.replies)
    },[post])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/replies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'post_id': id,
                'user_id': login.user.id,
                'text_content': value
            })})
            .then(res=> {
                if (res.ok) {
                    res.json().then(data=> {
                        setReplies([...replies, data])
                        setValue('')
                    })
                }
                else {
                    res.json().then(error=> {
                        console.log(error)
                    })
                }
            })

        
    }


    return (
        <div className='Feed'>
            <div className='full-post-page-header'>
                <BsArrowLeft onClick={()=>history.goBack()} />
                <h2>Post</h2>
            </div>

            <div className='full-post'>
                <div className='full-post-header'>
                    <img className='pic' src={user?.avatar} alt='user profile'/>
                    <div className='user-name'>
                        <h3>{user?.name}</h3>
                        <p style={{color:'gray'}}>@{user?.username}</p>
                    </div>
                </div>

                <div className='full-post-body'>
                    <p id='post-text'>{text}</p>
                    <p id='post-location'>{location?.name} - {created_at?.slice(0,10)} - {created_at?.slice(11,16)}</p>
                    <FullPostFooter post={post} />

                </div>

            </div>

            <div className='new-comment-form'>
                <img className='pic' src={login.user?.avatar} alt='user profile'/>
                <input type='text' placeholder='Post your reply' value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button className='round-button' onClick={handleSubmit} disabled={value==='' ? true : false}>Reply</button>
            </div>
        
            <div className='comments-list'>
                {replies?.map((reply)=><Reply key={reply.id} atUser={user.username} reply={reply} />)}
            </div>
        </div>
    )
}

export default FullPost