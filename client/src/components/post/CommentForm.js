import React from 'react'

function CommentForm() {

    const buttonStyle ={
        backgroundColor: 'white',
    }


    return (
        <div className='comment-form'>
            <form>
                <input placeholder='Post here' />
            </form>
            <button style={buttonStyle} className='round-button' type='submit'></button>
        </div>
  )
}

export default CommentForm