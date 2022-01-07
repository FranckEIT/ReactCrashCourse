import axios from "axios";
import {useEffect, useState} from "react";

const useFetch = (url) => {
    let [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then((res) =>{
                setData(res.data)
                setIsPending(false)
            }, (error) => {
                console.log('failed to fetch')
                setError(error.message)
            })
        return console.log('cleanup')
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;