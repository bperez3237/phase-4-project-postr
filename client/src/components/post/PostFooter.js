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
        <div>
          {replies.length}{" "}<FaRegComment id='comment' onClick={handleComment}/>
        </div>
        <div>
          {likes.length}{" "}{liked ? <FaHeart id='like' onClick={()=>handleLike(liked, id)} color='red'/> : <FiHeart id='like' onClick={()=>handleLike(liked, id)} color='black'/>}
        </div>
        <div>
          {userAccess && editable ? (editingToggle ? <FaEdit id='edit' onClick={()=>onEdit(id)} color='#7fffd0'/> : <FiEdit id='edit' onClick={()=>onEdit(id)} color='black'/>) : <></>}
        </div>
        <div>
          {userAccess && editable ? <FaTrashAlt id='delete' onClick={()=>handleDelete(id)} /> : <></>}
        </div>
    </div>
  )
}

export default PostFooter