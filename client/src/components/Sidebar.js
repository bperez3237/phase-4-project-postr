import React from 'react'
import {SiThunderbird} from 'react-icons/si'
import {RiHomeSmileFill} from 'react-icons/ri'
import {MdManageAccounts, MdTravelExplore} from 'react-icons/md'
import RoundedButton from './login/RoundedButton'

function Sidebar({setUser}) {

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
        <li id='home' className='row'>
          <RiHomeSmileFill id='icon' size='1.8em'/>
          <h2 id='title'>Home</h2>
        </li>
        <li id='Explore' className='row'>
          <MdTravelExplore id='icon' size='1.8em'/>
          <h2 id='title'>Explore</h2>
        </li>
        <li id='Account' className='row'>
          <MdManageAccounts id='icon' size='1.8em'/>
          <h2 id='title'>Profile</h2>
        </li>
      </ul>
      <RoundedButton color='#7fffd0'>Post</RoundedButton>
      <button variant="light" onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default Sidebar