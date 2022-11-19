import React from 'react'
import Newsfeed from '../newsfeed/Newsfeed'
import Searchbar from './Searchbar'
import WhoToFollow from './WhoToFollow'
import './styles/style.css'

function Endbar() {
  return (
    <div className='Extra'>
        <Searchbar />
        <Newsfeed />
        <WhoToFollow />
    </div>
  )
}

export default Endbar