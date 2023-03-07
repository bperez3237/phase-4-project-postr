import React from 'react'
import './styles/style.css'

function ErrorMessage({errors, setErrors}) {
  console.log(errors)
  return (
    <div className='error-message'>
        Error!
        <br />
        {/* <ul>{errors.map((error, index)=>{
            return <li key={index}>{error}</li>
        })}</ul> */}
        <p>{errors}</p>
        <button onClick={()=>setErrors(null)} className='round-button'>Close</button>
    </div>
  )
}

export default ErrorMessage;