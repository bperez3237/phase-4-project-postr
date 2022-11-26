import React, {useEffect, useState} from 'react'

function useGet({url}) {
    const [data, setData] = useState('')
    const [error,setError]=useState('')

    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(x=>setData(x))
        .catch(error=>setError(error))
    },[url])

    return {data, setData, error}
}

export default useGet;