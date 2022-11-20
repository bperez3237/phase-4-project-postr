import React, {useState, useEffect} from 'react'
import FollowButton from './FollowButton'


function WhoToFollow() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/random-three-users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])

  return (
    <div className='who-to-follow'>
      <h2>Who to follow</h2>
      <div className='list'>
        {users.map((user) => {
          return (
            <div className='row' key={user.id}>
              <div className='profile-pic'>
                {/* <img className='profile-pic' src={user.profile_pic} alt='profile pic' /> */}

                <div id='pic'></div>
              </div>
              <div className='user-info'>
                  <h5>{user.name}</h5>
                  <h6 style={{color:'gray'}}>@{user.username}</h6>
              </div>
              <FollowButton />
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