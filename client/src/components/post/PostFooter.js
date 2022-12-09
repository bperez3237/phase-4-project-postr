import React, {useState} from 'react'
import {FaHeart, FaEdit, FaTrashAlt, FaRegComment} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'
import Popup from '../Popup'
import CommentForm from './CommentForm'

function PostFooter({userAccess, editable, handleLike, handleDelete, onEdit, editingToggle, currentUser, post, setPosts}) {
  const {id, replies, likes} = post
  const [toggle,setToggle] = useState(false)

  const liked = Boolean(likes.find((like)=>like.user_id===currentUser.id))


  function handleComment() {
    setToggle(!toggle)
  }

  const commentFormElement = <CommentForm post={post} setPosts={setPosts} currentUser={currentUser}/>

  return (
    <div className="post-footer">
        {toggle ? <Popup onClose={setToggle} Component={commentFormElement}/> : <></>}
        <div id='comment' className='icon-container' onClick={handleComment}>
         <FaRegComment id='comment' />{"  "}{replies.length}
        </div>
        <div id='like' className='icon-container' onClick={()=>handleLike(liked, id)}>
          {liked ? <FaHeart id='like' color='red'/> : <FiHeart id='like' onClick={()=>handleLike(liked, id)} />}{"  "}{likes.length}
        </div>
        <div id='edit' className='icon-container' onClick={()=>onEdit(id)}>
          {userAccess && editable ? (editingToggle ? <FaEdit id='edit' color='#64c982'/> : <FiEdit id='edit' onClick={()=>onEdit(id)}/>) : <></>}
        </div>
        <div id='delete' className='icon-container' onClick={()=>handleDelete(id)} >
          {userAccess && editable ? <FaTrashAlt id='delete' /> : <></>}
        </div>
    </div>
  )
}

export default PostFooter