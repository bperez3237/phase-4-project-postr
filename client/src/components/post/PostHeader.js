import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {BsThreeDots} from 'react-icons/bs'
import PostMenu from './PostMenu'
import {ConvertTime} from './utils/ConvertTime'

function PostHeader({name, username, time}) {
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false)

  function handleClick() {
    setShowMenu(!showMenu)
  }

  return (
    <div className='post-header'>
        <h5 onClick={()=>history.push(`/profile/${username}`)}>{name} <span style={{color:'gray'}}>@{username}{' · '}{time}</span></h5>
        <BsThreeDots onClick={handleClick}/>
        {showMenu ? <PostMenu setShowMenu={setShowMenu} /> : null}
    </div>
  )
}

export default PostHeader