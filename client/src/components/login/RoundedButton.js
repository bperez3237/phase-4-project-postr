import React from 'react'

function RoundedButton(props) {
    console.log(props)
    const style = {
        'height': '40px',
        'width': '300px',
        'border-radius': '20px',
        'color': 'white',
        'background': 'black',
        'font-weight': 'bold',
    }

  return (
    <button style={style} type='submit'>{props.children}</button>
  )
}

export default RoundedButton