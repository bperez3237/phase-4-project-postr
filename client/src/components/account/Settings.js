import React from "react";
import { useState, useEffect } from "react";
import {Route, Switch,  useRouteMatch, useParams} from 'react-router-dom'

import './styles/style.css'
import {storage} from '../../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import SettingsSidebar from "./SettingsSidebar";
import Account from "./Account";
import Notifications from "./Notifications";

function Settings({login, setLogin}) {
    // let {url} = useRouteMatch()
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
            fetch(`/users/${login.user.id}`,{
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
                        setFile(null)
                    })
                } else {
                    r.json().then((error)=>console.log(error))
                }
            })
        }
    },[avatarUrl, login, setLogin])

    return (
        <div className="settings">
            <SettingsSidebar/>
            <div className="content">
                <Switch>
                    <Route path='/settings/account' >
                        <Account title={title} setTitle={setTitle} file={file} setFile={setFile} uploadImage={uploadImage}/>
                    </Route>
                    <Route path='/settings/notifications' >
                        <Notifications/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Settings;