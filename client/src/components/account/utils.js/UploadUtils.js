import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {storage} from '../../../firebase'
import {v4} from 'uuid'


const uploadImage = (e, file, setUrl) => {
    e.preventDefault()
    if (file==null) return;
    const imageRef = ref(storage, `images/${file.name+v4()}`)
    uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setUrl(url)
        })
    })

}

export default uploadImage;