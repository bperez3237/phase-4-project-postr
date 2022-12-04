import {useEffect, useState} from 'react'

function usePatch(url, obj) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then((r)=>{
            if (r.ok) {
                r.json().then((data)=>setData(data))
            } else {
                r.json().then((error)=>setError(error))
            }
        }).finally(()=>setLoading(false))
    },[url])


    return {data, setData, loading, error, setError}
}

export default usePatch;