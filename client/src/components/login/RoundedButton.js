import React from 'react'
import {stringToColor} from '../../utils/Colors'

function RoundedButton(props) {

  console.log(props)
  const style = {
      'height': '40px',
      'width': '300px',
      'border-radius': '20px',
      'border': 'none',
      'color': 'white',
      'background': props.color,
      'font-weight': 'bold',
  }

  return (
    <button style={style} type='submit'>{props.children}</button>
  )
}

export default RoundedButton;