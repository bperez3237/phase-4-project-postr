import React, {useState, useEffect} from 'react'

function Account({title, setTitle, file, setFile, uploadImage, uploadBanner}) {
  const [toggleAvatar, setToggleAvatar] = useState(false)
  const [toggleBanner, setToggleBanner] = useState(false)

  useEffect(()=>{
    if (toggleAvatar) {
      setToggleBanner(false)
    }
    
    if (toggleBanner) {
      setToggleAvatar(false)
    }
  }, [toggleAvatar, toggleBanner])

  return (
    <div className='your-account'>
        <div className='heading'>
            <h3>Your Account</h3>
            <p>See information about your account, download an archive of your data, or learn about your account deactivation options</p>
        </div>
        <div className='account-options'>
            <button className='option' onClick={()=>setToggleAvatar(!toggleAvatar)}>Change profile Picture</button>
            <button className='option' onClick={()=>setToggleBanner(!toggleBanner)}>Change banner Picture</button>
        </div>
         {toggleAvatar ? <form id='profile-pic-upload'>
                <label>Title: </label>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <label>{'Upload Picture: '}</label>
                <input type="file" name='image' onChange={(e)=>setFile(e.target.files[0])} />
                <button onClick={uploadImage}>Upload</button>
            </form> : <></>}

         {toggleBanner ? <form id='profile-pic-upload'>
                <label>Title: </label>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <label>{'Upload Picture: '}</label>
                <input type="file" name='image' onChange={(e)=>setFile(e.target.files[0])} />
                <button onClick={uploadBanner}>Upload</button>
            </form> : <></>}
    </div>
  )
}

export default Account