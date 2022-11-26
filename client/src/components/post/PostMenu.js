import React from 'react'

function PostMenu({setShowMenu}) {



  return (
    <div className='post-menu'>
        <ul className='menu-list'>
            <li className='row' onClick={()=>setShowMenu(false)}>Close</li>
            <li className='row'>Edit</li>
            <li className='row'>Delete</li>
        </ul>
    </div>
  )
}

export default PostMenu