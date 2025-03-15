import React, { useRef, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet"
import osmProviders from './osm-providers'
import L, { icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

const MarkerIcon = new L.Icon({
    iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
})


const CustomMap = () => {
    const [focus, setFocus] = useState({lat:27.64256108005826, lng: 85.32555398598879})
    const ZOOM_LEVEL = 12;
    const mapRef = useRef()

    return (
        <>
            <div className='row'> 
                <div className='col text-center'>
                    <h1> Loading maps</h1>
                    <div className='col'>
                        <MapContainer center= {focus} zoom={ZOOM_LEVEL} ref={mapRef}>
                            <TileLayer url={osmProviders.maptiler.url} attribution={osmProviders.maptiler.attribution}/>

                            <Marker position={[27.64256108005826, 85.32555398598879]} icon={MarkerIcon}>
                                <Popup>
                                    <b> First Marker </b>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomMap
