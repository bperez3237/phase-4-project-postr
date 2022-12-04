import React from 'react'
import {useHistory} from 'react-router-dom'

function SettingsSidebar() {
    const history = useHistory()
    const sidebarList = [
        {'Account': '/settings/account'},
        {'Notifications': '/settings/notifications'}
    ]
  return (
    <div className='sidebar'>
        <div className='heading'>
            <h3>Settings</h3>
        </div>
        <div className='sidebar-container'>
        {sidebarList.map((item, index) => {
            return(
                <div key={index} className="sidebar-option" onClick={()=>history.push(`${Object.values(item)}`)}>{Object.keys(item)}</div>
            )})
        }
        </div>
    </div>
  )
}

export default SettingsSidebar