import React from 'react'
import {FaHeart, FaEdit, FaTrashAlt, FaRegComment} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'

function PostFooter({userAccess, editable, liked, numLikes, id, handleLike, handleDelete, onEdit, editingToggle}) {
  return (
    <div className="post-footer">
        <div>{"0 "}<FaRegComment id='comment'/></div>
        <div>{numLikes}{""}{liked ? <FaHeart id='like' onClick={()=>handleLike(liked, id)} color='red'/> : <FiHeart id='like' onClick={()=>handleLike(liked, id)} color='black'/>}</div>
        <div>{userAccess && editable ? (editingToggle ? <FaEdit id='edit' onClick={()=>onEdit(id)} color='#7fffd0'/> : <FiEdit id='edit' onClick={()=>onEdit(id)} color='black'/>) : <></>}</div>
        <div>{userAccess && editable ? <FaTrashAlt id='delete' onClick={()=>handleDelete(id)} /> : <></>}</div>
    </div>
  )
}

export default PostFooter