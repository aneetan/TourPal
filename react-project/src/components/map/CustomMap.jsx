import React, { useEffect, useRef, useState } from 'react'
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet"
import osmProviders from '../map/osm-providers'
import L, { icon } from "leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine';
import cities from "../map/cities.json"
import useGeoLocation from '../../hooks/useGeoLocation'
import { Button } from 'antd'
import Navbar from '../landing/Navbar'
import Footer from '../landing/Footer'

//icon for added geolocations
const MarkerIcon = new L.Icon({
    iconUrl: "https://images.ctfassets.net/3prze68gbwl1/assetglossary-17su9wok1ui0z7w/c4c4bdcdf0d0f86447d3efc450d1d081/map-marker.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
})

//icon for user location
const UserLocationIcon = new L.Icon({
    iconUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png",
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
})

//location flyover to user location
const FlyToLocation = ({ location, zoomLevel }) => {
    const map = useMap(); // useMap helps to access the map instance

    useEffect(() => {
        if (location.loaded && !location.error) {
            map.flyTo(
                [location.coordinates.lat, location.coordinates.lon],
                zoomLevel,
                { animate: true }
            );
        }
    }, [location, zoomLevel, map]);

    return null; 
};

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; 
};


const CustomMap = () => {    
    const [focus, setFocus] = useState({lat:27.64256108005826, lng: 85.32555398598879})
    const [nearbyLocations, setNearbyLocations] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState(null);

    const ZOOM_LEVEL = 14;
    const mapRef = useRef();
    const routingControlRef = useRef();
    const location = useGeoLocation();

    //zoom in to user location
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

    // Filter nearby locations within a radius (e.g., 10 km)
    useEffect(() => {
        if (location.loaded && !location.error) {
            const userLat = location.coordinates.lat;
            const userLon = location.coordinates.lon;
            const radius = 10; // km

            const nearby = cities.filter(city => {
                const distance = calculateDistance(userLat, userLon, city.lat, city.lon);
                return distance <= radius;
            });

            setNearbyLocations(nearby);
        }
    }, [location]);

     // Add routing between user location and nearby locations
     useEffect(() => {
        if (location.loaded && !location.error && selectedLocations && mapRef.current) {
            const userLatLng = L.latLng(location.coordinates.lat, location.coordinates.lon);
            const selectedLatLng = L.latLng(selectedLocations.lat, selectedLocations.lon);

            // Clear previous routing control
            if (routingControlRef.current) {
                routingControlRef.current.remove();
            }

            // Add routing for the selected location
            routingControlRef.current = L.Routing.control({
                waypoints: [userLatLng, selectedLatLng],
                show: true, 
                routeWhileDragging: false,
                addWaypoints: false, 
                draggableWaypoints: false, 
                fitSelectedRoutes: true,
                createMarker: () => null,
            }).addTo(mapRef.current);

        }
    }, [location, selectedLocations]);

    //Book Guide button function
    const handleBookGuide = (city) => {
        console.log("Booking guide for:", city.Place);
    }

    return (
        <>
        <Navbar/>

            <div className='row'> 
                <div className='col text-center'>
                    {/* <h1> Loading maps</h1>

                    <Button onClick={zoomToUserLocation}> Load </Button> */}

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
                            
                            {nearbyLocations.map((city, index) => (
                                <Marker position={[city.lat, city.lon]}
                                    icon={MarkerIcon}
                                    key={index}
                                    eventHandlers={{
                                        click: () => setSelectedLocations(city),
                                    }}
                                >
                                    <Popup>
                                        <b> {city.Place}</b>
                                        <br/>
                                        {selectedLocations && selectedLocations.Place === city.Place &&(
                                            <button onClick={() => handleBookGuide(city)}
                                            style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
                                            > See More </button>
                                        )}
                                        
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CustomMap
