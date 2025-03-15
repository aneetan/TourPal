import React, { useEffect, useState } from 'react'

const useGeoLocation = () => {
    const[location, setLocation] = useState({
        loaded: false,
        coordinates:{lat:"", lon:""},
        error:null,
    })

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lon: location.coords.longitude,
            },
            error: null
        })
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: { lat: "", lon: "" },
            error: {
                code: error.code || 0,
                message: error.message || "Geolocation not supported",
            },
        })
    }

    useEffect(() => {
        if(!("geolocation" in navigator)){
            onError({
                error: {
                    code: 0,
                    message:"Geolocation not supported"
                }
            });
            return
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } , [])

    return location;
}

export default useGeoLocation
