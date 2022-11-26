import React, {useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import PostMenu from './PostMenu'

function PostHeader({name, username}) {
  const [showMenu, setShowMenu] = useState(false)

  function handleClick() {
    setShowMenu(!showMenu)
  }

  return (
    <div className='post-header'>
        <h5>{name} <span style={{color:'gray'}}>@{username}</span></h5>
        <BsThreeDots onClick={handleClick}/>
        {showMenu ? <PostMenu setShowMenu={setShowMenu} /> : null}
    </div>
  )
}

export default PostHeader