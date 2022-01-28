import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [lists, setLists] = useState('')
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error('Error')
            }
            return res.json()
        })
        .then(data=>{
            setLists(data)
        })
        .catch(err=>{
            setError(err.message)
        })
    }, [url])
    return {lists, error}
}

export default useFetch