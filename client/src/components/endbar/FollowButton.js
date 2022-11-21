import React from 'react'

function FollowButton() {
    const style = {
        'height': '40px',
        'width': '150px',
        'borderRadius': '20px',
        'border': 'none',
        'color': 'white',
        'background': 'black',
        'fontWeight': 'bold',
    }
  return (
    <button style={style} onClick={()=>console.log('follow')}>Follow</button>
  )
}

export default FollowButton