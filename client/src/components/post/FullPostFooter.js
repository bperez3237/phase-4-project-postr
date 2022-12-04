import React from 'react'
import {FaHeart, FaEdit, FaTrashAlt, FaRegComment} from 'react-icons/fa'
import {FiHeart, FiEdit} from 'react-icons/fi'

function FullPostFooter({post}) {
    
  return (
    <div className='full-post-footer'>
        <div className='footer-details'>
            <p>{post.replies?.length} Replies</p>
            <p>{post.likes?.length} Likes</p>
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