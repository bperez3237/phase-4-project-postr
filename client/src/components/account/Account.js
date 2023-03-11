import React, {useState} from 'react'

function Account({title, setTitle, file, setFile, uploadImage}) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='your-account'>
        <div className='heading'>
            <h3>Your Account</h3>
            <p>See information about your account, download an archive of your data, or learn about your account deactivation options</p>
        </div>
        <div className='account-options'>
            <button className='option' onClick={()=>setToggle(!toggle)}>Change profile Picture</button>
        </div>
         {toggle ? <form id='profile-pic-upload'>
                <label>Title: </label>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <label>{'Upload Picture: '}</label>
                <input type="file" name='image' onChange={(e)=>setFile(e.target.files[0])} />
                <button onClick={uploadImage}>Upload</button>
            </form> : <></>}
    </div>
  )
}

export default Account