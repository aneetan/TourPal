import { useEffect, useState } from 'react'
import axios from 'axios'

//we'll need body for post/ patch/ put
function useFetch (url, method="GET", body = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //the axios api call has three states
        //- data (the actual data returned)
        //- loading (to give information that the data is being loaded)
        //- error(to catch any errors)

    //the dependency array consist of the [url] which means the useEffect will be triggered at the beginning
    // and when the ul changes
    useEffect(()=> {
        setLoading(true);

        const config = {
            method: method.toLowerCase(),
            url:url,
            data:body
        }

        axios(config).
        then((response) => {
            setData(response.data)
        })
        .catch((err)=> {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url, method, body]);

    //return an object consisting all three states
    return {data, loading, error};

}

export default useFetch

//    const { data, loading, error } = useFetch("http://localhost:3000/users")
// if you want to use the hook, you can use either of the states or all of them