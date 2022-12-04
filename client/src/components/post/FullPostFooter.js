import React from 'react'
import {FaHeart, FaEdit, FaTrashAlt, FaRegComment} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'

function FullPostFooter({post}) {
    console.log(post)
  return (
    <div className='full-post-footer'>
        <div className='footer-details'>
            {post.replies.length} Replies
            {post.likes.length} Likes
        </div>
        <div className='footer-icons'>
            <div>
                <FaRegComment id='comment' />
            </div>
            <div>
                <FaHeart id='like' />
            </div>
            <div>
                <FaEdit id='edit' />
            </div>
            <div>
                <FaTrashAlt id='delete' />
            </div>
        </div>
    </div>

  )
}

export default FullPostFooter