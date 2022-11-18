import React from 'react'
import {useHistory} from 'react-router-dom'
import {SiThunderbird} from 'react-icons/si'
import {RiHomeSmileFill} from 'react-icons/ri'
import {MdManageAccounts, MdTravelExplore} from 'react-icons/md'
import RoundedButton from './login/RoundedButton'

function Sidebar({setUser}) {
  const history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div className='Sidebar'>
      <ul className='Sidebar-list'>
        <li id='logo' className='row'>
          <SiThunderbird size='2em' color='#7fffd0'/>
        </li>
        <li id='home' className='row' onClick={()=>history.push('/')}>
          <RiHomeSmileFill id='icon' size='1.8em'/>
          <h2 id='title'>Home</h2>
        </li>
        <li id='Explore' className='row' onClick={()=>history.push('/explore')}>
          <MdTravelExplore id='icon' size='1.8em'/>
          <h2 id='title'>Explore</h2>
        </li>
        <li id='Account' className='row' onClick={()=>history.push('/account')}>
          <MdManageAccounts id='icon' size='1.8em'/>
          <h2 id='title'>Profile</h2>
        </li>
        <li id='Post' className='row'>
          <RoundedButton text='Post' color='#7fffd0' type='button'/>
        </li>
      </ul>
      <button id='logout-button' onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default Sidebar