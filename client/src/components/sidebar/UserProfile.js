import React, {useState, useContext} from 'react'
import { LoginContext } from '../../context/LoginContext'
import ProfileOptions from './ProfileOptions'
import {FiMoreHorizontal} from 'react-icons/fi'

function UserProfile({ layout}) {
    const [toggle,setToggle] = useState(false)
    const {login, setLogin} = useContext(LoginContext)
    
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
            ) : null}
        </div>
  )
}

export default UserProfile