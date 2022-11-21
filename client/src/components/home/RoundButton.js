import React from 'react'

function RoundButton({type, text, setText, posts, setPosts, user, location}) {

    const style = {
    'height': '40px',
    'width': '150px',
    'borderRadius': '20px',
    'border': 'none',
    'color': 'white',
    'background': '#7fffd0',
    'fontWeight': 'bold',
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit') 
    fetch('/posts', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          user_id: user.id,
          location_id: location.id,
          text: text
      })
  })
      .then((r)=>r.json())
      .then((posts)=>{
        console.log('here')
        setPosts(posts)
        setText('')
      })
  }

  return (
    <button style={style} type={type} onClick={handleSubmit}>Post</button>
  )
}

export default RoundButton