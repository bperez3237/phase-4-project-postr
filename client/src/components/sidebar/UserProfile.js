import React, {useState} from 'react'
import ProfileOptions from './ProfileOptions'
import {FiMoreHorizontal} from 'react-icons/fi'

function UserProfile({login, setLogin, layout}) {
    const [toggle,setToggle] = useState(false)
    
  return (
        <div className='user-profile' onClick={()=>setToggle(!toggle)}>
            <div className='image'>
                <img className='pic' src={login.user.avatar} alt='user profile'/>
            </div>

            {toggle ? <ProfileOptions setLogin={setLogin}/> : <></>}
            {(layout==='max') ? (
                <>
                    <div className='info'>
                        <h3>{login.user.name}</h3>
                        <h4>@{login.user.username}</h4>
                    </div>
                    <div className='more-options' >
                        <FiMoreHorizontal size='1.5em' color=''/>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
  )
}

export default UserProfile