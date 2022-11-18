import React from 'react'
import {stringToColor} from '../../utils/Colors'

function RoundedButton({text, color, type, onClick}) {

  const style = {
      'height': '40px',
      'width': '300px',
      'border-radius': '20px',
      'border': 'none',
      'color': 'white',
      'background': color,
      'font-weight': 'bold',
  }

  return (
    <button style={style} type={type}>{text}</button>
  )
}

export default RoundedButton;