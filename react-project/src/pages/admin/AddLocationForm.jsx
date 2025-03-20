import React, { useState } from 'react';
import axios from 'axios';
import AdminMapComponent from '../../components/map/AdminMapComponent';

const AddLocationForm = () => {
  const [locationName, setLocationName] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleLocationSelect = (latlng) => {
    setLatitude(latlng.lat);
    setLongitude(latlng.lng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
      location_name: locationName,
      description,
      latitude,
      longitude
    };

    try {
      await axios.post('/api/add-location/', data);  // Django API URL
      alert('Location added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add location.');
    }
  };

  return (
    <div>
      <h2>Add Location</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Location Name:</label>
        <input 
          type="text"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Latitude:</label>
        <input 
          type="text"
          value={latitude}
          readOnly
        />

        <label>Longitude:</label>
        <input 
          type="text"
          value={longitude}
          readOnly
        />

        <button type="submit">Add Location</button>
      </form>

      <AdminMapComponent onLocationSelect={handleLocationSelect} />
    </div>
  );
};

export default AddLocationForm;
