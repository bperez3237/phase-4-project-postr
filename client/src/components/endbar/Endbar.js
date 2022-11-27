import React from 'react'
import Newsfeed from './Newsfeed'
import Searchbar from './Searchbar'
import WhoToFollow from './WhoToFollow'
import './styles/style.css'

function Endbar({layout}) {
  return (
    <div className={layout=='min' ? 'Empty' : 'Extra'}>
        {layout != 'min' ? (
          <div>
            <Searchbar />
            <Newsfeed />
            <WhoToFollow />
          </div>
        ) : (
          <div className=''></div>
        )}
    </div>
  )
}

export default Endbar