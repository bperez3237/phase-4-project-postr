import React from 'react'
import {stringToColor} from '../../utils/Colors'

function RoundedButton({text, color, type, toggleValue, setToggle}) {

  const style = {
      'height': '40px',
      'width': '300px',
      'borderRadius': '20px',
      'border': 'none',
      'color': 'white',
      'background': color,
      'fontWight': 'bold',
  }

  return (
    <button style={style} type={type} onClick={()=>setToggle(!toggleValue)}>
      {text}
    </button>
  )
}

export default RoundedButton;