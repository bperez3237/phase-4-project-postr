import React, {useState, useEffect} from 'react'
import useGet from '../../hooks/useGet'

function WhoToFollow() {

  const {data: users, setData: setUsers} = useGet(`/random-three-users`)

  return (
    <div className='who-to-follow'>
      <h2>Who to follow</h2>
      <div className='list'>
        {users.map((user) => {
          return (
            <div className='row' key={user.id}>
              <div className='profile-pic'>
                <img className='pic' src={user.avatar} alt='user profile'/>
              </div>
              <div className='user-info'>
                  <h5>{user.name}</h5>
                  <h6 style={{color:'gray'}}>@{user.username}</h6>
              </div>
              <button className='round-button' onClick={()=>console.log('follow')}>Follow</button>
            </div>
          )
        })}
      </div>
      <div className='show-more' onClick={()=>console.log('show more')}>
        <p>Show More</p>
      </div>
    </div>
  )
}

export default WhoToFollow