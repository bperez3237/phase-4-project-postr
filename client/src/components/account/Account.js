import React from "react";
import { useState, useEffect } from "react";
import './Style.css'
import {storage} from '../../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

function Account({login, setLogin}) {
    const [title, setTitle] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [file, setFile] = useState(null)

    const uploadImage = (e) => {
        e.preventDefault()
        if (file==null) return;
        const imageRef = ref(storage, `images/${file.name+v4()}`)
        uploadBytes(imageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setAvatarUrl(url)
            })
        })

    }

    useEffect(()=>{
        if (avatarUrl!=='') {
            fetch(`users/${login.user.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({avatar: avatarUrl})
            }).then((r)=>{
                if (r.ok) {
                    r.json().then((data)=>{
                        setLogin({...login, user: data})
                        setAvatarUrl('')
                    })
                } else {
                    r.json().then((error)=>console.log(error))
                }
            })
        }
    },[avatarUrl, login, setLogin])

    return (
        <div className="account">
            <form id='profile-pic-upload'>
                <label>Title: </label>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <label>{'Upload Picture: '}</label>
                <input type="file" name='image' onChange={(e)=>setFile(e.target.files[0])} />
                <button onClick={uploadImage}>Upload</button>
            </form>
        </div>
    )
}

export default Account;