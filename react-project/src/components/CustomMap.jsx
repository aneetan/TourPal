import React, { useEffect, useRef, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet"
import osmProviders from './osm-providers'
import L, { icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import cities from "./cities.json"
import useGeoLocation from '../hooks/useGeoLocation'
import { Button } from 'antd'

const MarkerIcon = new L.Icon({
    iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
})

const UserLocationIcon = new L.Icon({
    iconUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
})

const FlyToLocation = ({ location, zoomLevel }) => {
    const map = useMap(); // Access the map instance

    useEffect(() => {
        if (location.loaded && !location.error) {
            map.flyTo(
                [location.coordinates.lat, location.coordinates.lon],
                zoomLevel,
                { animate: true }
            );
        }
    }, [location, zoomLevel, map]);

    return null; // This component doesn't render anything
};


const CustomMap = () => {
    const [focus, setFocus] = useState({lat:27.64256108005826, lng: 85.32555398598879})
    const ZOOM_LEVEL = 14;
    const mapRef = useRef()
    const location = useGeoLocation();

    const zoomToUserLocation = () => {
        if (location.loaded && !location.error && mapRef.current) {
            mapRef.current.flyTo(
                [location.coordinates.lat, location.coordinates.lon],
                ZOOM_LEVEL,
                { animate: true }
            );
        } else {
            alert(location.error ? location.error.message : 'Location not available');
        }
    };

    return (
        <>
            <div className='row'> 
                <div className='col text-center'>
                    <h1> Loading maps</h1>
                    <Button onClick={zoomToUserLocation}> Load </Button>
                    <div className='col'>
                        <MapContainer center= {focus} zoom={ZOOM_LEVEL} ref={mapRef}
                            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
                        >
                            <TileLayer url={osmProviders.maptiler.url} attribution={osmProviders.maptiler.attribution}/>

                            {(location.loaded) && !(location.error) &&(
                                <Marker
                                    position={[location.coordinates.lat, location.coordinates.lon]}
                                    icon={UserLocationIcon}
                                >

                                </Marker>
                            )}
                            <FlyToLocation location={location} zoomLevel={ZOOM_LEVEL}/>
                            
                            {cities.map((city, index) => (
                                <Marker position={[city.lat, city.lon]}
                                    icon={MarkerIcon}
                                    key={index}
                                >
                                    <Popup>
                                        <b> {city.Place}</b>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomMap
