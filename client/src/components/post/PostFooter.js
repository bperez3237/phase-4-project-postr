import React, {useState} from 'react'
import {FaHeart, FaEdit, FaTrashAlt, FaRegComment} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'
import Popup from '../Popup'
import CommentForm from './CommentForm'

function PostFooter({userAccess, editable, liked, numLikes, id, handleLike, handleDelete, onEdit, editingToggle}) {
  const [toggle,setToggle] = useState(false)


  function handleComment() {
    setToggle(!toggle)
  }

  // const commentFormElement = <CommentForm />

  return (
    <div className="post-footer">
        {/* {toggle ? <Popup onClose={setToggle} Component={commentFormElement}/> : <></>} */}
        <div>{"0 "}<FaRegComment id='comment' onClick={handleComment}/></div>
        <div>{numLikes}{""}{liked ? <FaHeart id='like' onClick={()=>handleLike(liked, id)} color='red'/> : <FiHeart id='like' onClick={()=>handleLike(liked, id)} color='black'/>}</div>
        <div>{userAccess && editable ? (editingToggle ? <FaEdit id='edit' onClick={()=>onEdit(id)} color='#7fffd0'/> : <FiEdit id='edit' onClick={()=>onEdit(id)} color='black'/>) : <></>}</div>
        <div>{userAccess && editable ? <FaTrashAlt id='delete' onClick={()=>handleDelete(id)} /> : <></>}</div>
    </div>
  )
}

export default PostFooter