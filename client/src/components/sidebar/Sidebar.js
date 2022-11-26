import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {SiThunderbird} from 'react-icons/si'
import {RiHomeSmileFill} from 'react-icons/ri'
import {TbDotsCircleHorizontal} from 'react-icons/tb'
import {MdManageAccounts, MdTravelExplore, MdPostAdd} from 'react-icons/md'
import RoundedButton from '../login/RoundedButton'
import NewPost from '../home/NewPost'
import './styles/style.css'
import UserProfile from './UserProfile'

function Sidebar({location, user, setUser, setPosts, layout}) {
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
    <div className={`Sidebar${layout=='max' ? '' : ' short'}`}>
      <ul className='Sidebar-list'>
        <li id='logo' className='row'>
          <SiThunderbird size='2em' color='#7fffd0'/>{layout}
        </li>
        <li id='home' className='row' onClick={()=>history.push('/')}>
          <RiHomeSmileFill id='icon' size='1.8em'/>
          {layout == 'max' ? <h2 id='title'>Home</h2> : <></>}
        </li>
        <li id='Explore' className='row' onClick={()=>history.push('/explore')}>
          <MdTravelExplore id='icon' size='1.8em'/>
          {layout == 'max' ? <h2 id='title'>Explore</h2> : <></>}
        </li>
        <li id='Profile' className='row' onClick={()=>history.push(`/profile/${user.username}`)}>
          <MdManageAccounts id='icon' size='1.8em'/>
          {layout =='max' ? <h2 id='title'>Profile</h2> : <></>}
        </li>
        <li id='Account' className='row' onClick={()=>history.push('/account')}>
          <TbDotsCircleHorizontal id='icon' size='1.8em'/>
          {layout =='max' ? <h2 id='title'>Account</h2> : <></>}
        </li>
        <li id='Post' className='row'>
          <RoundedButton 
          text={layout=='max' ? 'Post' : <MdPostAdd id='icon' size='1.8em'></MdPostAdd>} 
          color='#7fffd0' 
          type='button' 
          toggleValue={toggleNewPost} 
          setToggle={setToggleNewPost}/>
        </li>
      </ul>
      {toggleNewPost ? <NewPost className='new-post' locationId={location.id} userId={user.id} setPosts={setPosts} setToggleNewPost={setToggleNewPost} /> : <></>}
      <UserProfile layout={layout} user={user} setUser={setUser} />
    </div>
  )
}

export default Sidebar