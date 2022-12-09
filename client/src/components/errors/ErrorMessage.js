import React from 'react'
import './styles/style.css'

function ErrorMessage({errors, setErrors}) {
    console.log(errors)
  return (
    <div className='error-message'>
        Error!
        <ul>{errors.map((error, index)=>{
            return <li key={index}>{error}</li>
        })}</ul>
        <p onClick={()=>setErrors(null)}>Close</p>
    </div>
  )
}

export default ErrorMessage