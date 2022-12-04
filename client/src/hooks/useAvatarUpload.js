import React, {useState, useEffect} from 'react'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import usePatch from './usePatch'
import {storage} from '../firebase'

function useAvatarUpload(imageRef, file) {
    const [imageUrl, setImageUrl] = useState('')
    let obj = {}

    useEffect(()=>{
        uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setImageUrl(url)
        })
    })
    },[imageRef, file])

    // useEffect(()=>{
    //     if (imageUrl !== '') {
    //         obj = usePatch(`users/${user_id}`, {avatar: imageUrl})
    //     }
    // },[imageUrl])

    return {obj}
}

export default useAvatarUpload