import React from 'react'

function ProfileOptions({setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (
    <div className='options'>
        <div className='arrow'></div>
        <div id='logout' className='option-row' onClick={handleLogoutClick}>Logout</div>
        <div className='option-row'>1</div>
        <div className='option-row'>2</div> 
        <div className='option-row'>3ejrnvkerjnvkrejfv</div>
    </div>
  )
}

export default ProfileOptions