import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {SiThunderbird} from 'react-icons/si'
import {RiHomeSmileFill} from 'react-icons/ri'
import {MdManageAccounts, MdTravelExplore} from 'react-icons/md'
import RoundedButton from './login/RoundedButton'
import NewPost from './home/NewPost'

function Sidebar({location, user, setUser, posts, setPosts}) {
  const history = useHistory()
  const [toggleNewPost, setToggleNewPost] = useState(false)

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
          <RoundedButton text='Post' color='#7fffd0' type='button' toggleValue={toggleNewPost} setToggle={setToggleNewPost}/>
        </li>
      </ul>
      {toggleNewPost ? <NewPost className='new-post' locationId={location.id} userId={user.id} setPosts={setPosts} setToggleNewPost={setToggleNewPost}></NewPost> : <></>}
      <button id='logout-button' onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default Sidebar