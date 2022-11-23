import React from 'react'

function RoundButton() {

  const style = {
    'height': '40px',
    'width': '125px',
    'borderRadius': '20px',
    'border': 'solid 1px gray',
    'color': 'black',
    'background': 'white',
    'fontWeight': 'bold',
  }


  return (
    <button style={style} id='edit-profile-button'>Edit Profile</button>
  )
}

export default RoundButton;