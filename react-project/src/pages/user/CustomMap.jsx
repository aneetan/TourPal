import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import osmProviders from '../../components/map/osm-providers'
import cities from "../../components/map/cities.json"
import useGeoLocation from '../../hooks/useGeoLocation'
import { useNavigate } from 'react-router'
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine';
import { getAllPlaces } from '../../utils/user.utils'

//icon for added geolocations
const MarkerIcon = new L.Icon({
    iconUrl: "https://images.icon-icons.com/2642/PNG/512/google_map_location_logo_icon_159350.png",
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
    const map = useMap();

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

const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
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
    const [focus, setFocus] = useState({lat: 27.64256108005826, lng: 85.32555398598879})
    const [nearbyLocations, setNearbyLocations] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState(null);
    const [places, setPlaces] = useState([]);

    const ZOOM_LEVEL = 13;
    const mapRef = useRef();
    const routingControlRef = useRef();
    const location = useGeoLocation();
    const navigate = useNavigate();

    // Load all places on component mount
    useEffect(() => {
        getAllPlaces().then((response) => {
            setPlaces(response);
        });
    }, []);

    // Filter nearby locations when location or places change
    useEffect(() => {
        if (location.loaded && !location.error && places.length > 0) {
            const userLat = location.coordinates.lat;
            const userLon = location.coordinates.lon;
            const radius = 10; // km

            const nearby = places.filter(place => {
                // Make sure place has valid coordinates
                if (!place.latitude || !place.longitude) return false;
                
                const distance = calculateDistance(
                    userLat, 
                    userLon, 
                    parseFloat(place.latitude), 
                    parseFloat(place.longitude)
                );
                return distance <= radius;
            });

            setNearbyLocations(nearby);
        }
    }, [location, places]);

    // Add routing between user location and selected location
    useEffect(() => {
        if (location.loaded && !location.error && selectedLocations && mapRef.current) {
            const userLatLng = L.latLng(location.coordinates.lat, location.coordinates.lon);
            const selectedLatLng = L.latLng(
                parseFloat(selectedLocations.latitude), 
                parseFloat(selectedLocations.longitude)
            );

            if (routingControlRef.current) {
                routingControlRef.current.remove();
            }

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

    const handleBookGuide = (id) => {
        navigate(`/seeMore/${id}`);
    }

    return (
        <div className='row'> 
            <div className='col text-center'>
                <div className='col'>
                    <MapContainer center={focus} zoom={ZOOM_LEVEL} ref={mapRef}
                        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
                    >
                        <TileLayer url={osmProviders.maptiler.url} attribution={osmProviders.maptiler.attribution}/>

                        {location.loaded && !location.error && (
                            <Marker
                                position={[location.coordinates.lat, location.coordinates.lon]}
                                icon={UserLocationIcon}
                            >
                                <Popup>Your Location</Popup>
                            </Marker>
                        )}

                        <FlyToLocation location={location} zoomLevel={ZOOM_LEVEL}/>
                        
                        {nearbyLocations.map((place, index) => (
                            <Marker 
                                position={[
                                    parseFloat(place.latitude), 
                                    parseFloat(place.longitude)
                                ]}
                                icon={MarkerIcon}
                                key={index}
                                eventHandlers={{
                                    click: () => setSelectedLocations(place),
                                }}
                            >
                                <Popup>
                                    <b>{place.name}</b>
                                    <br/>
                                    <button 
                                        onClick={() => handleBookGuide(place.id)}
                                        className='m-1 p-1 underline cursor-pointer'
                                    > 
                                        See More 
                                    </button>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default CustomMap