import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {SiThunderbird} from 'react-icons/si'
import {RiHomeSmileFill} from 'react-icons/ri'
import {TbDotsCircleHorizontal} from 'react-icons/tb'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdTravelExplore, MdPostAdd} from 'react-icons/md'
import NewPost from '../post/NewPost'
import './styles/style.css'
import UserProfile from './UserProfile'
import Popup from '../Popup'
import { LoginContext } from '../../context/LoginContext'

function Sidebar({ posts, setPosts, layout}) {
  const history = useHistory()
  const {login} = useContext(LoginContext)
  const [toggleNewPost, setToggleNewPost] = useState(false)

  const buttonStyle = {
    backgroundColor: '#274d40',
    width: '80%',
  }

  const newPostElem = <NewPost posts={posts} setPosts={setPosts} setToggleNewPost={setToggleNewPost}/>

  return (
    <div className={`Sidebar${layout==='max' ? '' : ' short'}`}>
      <ul className='Sidebar-list'>
        <li id='logo' className='row'>
          <SiThunderbird size='2em' onClick={()=>history.push('/')}/>
        </li>
        <li id='home' className='row' onClick={()=>history.push('/')}>
          <RiHomeSmileFill id='icon' size='1.8em'/>
          {layout === 'max' ? <h2 id='title'>Home</h2> : <></>}
        </li>
        <li id='Explore' className='row' onClick={()=>history.push('/explore')}>
          <MdTravelExplore id='icon' size='1.8em'/>
          {layout === 'max' ? <h2 id='title'>Explore</h2> : <></>}
        </li>
        <li id='Profile' className='row' onClick={()=>history.push(`/profile/${login.user.username}`)}>
          <BsFillPersonFill id='icon' size='1.8em'/>
          {layout ==='max' ? <h2 id='title'>Profile</h2> : <></>}
        </li>
        <li id='Account' className='row' onClick={()=>history.push('/settings/account')}>
          <TbDotsCircleHorizontal id='icon' size='1.8em'/>
          {layout ==='max' ? <h2 id='title'>Account</h2> : <></>}
        </li>
        <li id='Post' className='row'>
          <button style={buttonStyle} className='round-button' onClick={()=>setToggleNewPost(!toggleNewPost)}>
            {layout ==='max' ? 'Post' : <MdPostAdd id='icon' size='1.8em'></MdPostAdd>}
          </button>
        </li>
      </ul>
      {toggleNewPost ? <Popup onClose={setToggleNewPost} Component={newPostElem}/> : <></>}
      <UserProfile layout={layout} />
    </div>
  )
}

export default Sidebar