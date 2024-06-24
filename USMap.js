import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const advisors = [
  { name: 'Advisor 1', repCode: 'A001', coordinates: [38.9072, -77.0369] },
  { name: 'Advisor 2', repCode: 'A002', coordinates: [37.7749, -122.4194] },
  { name: 'Advisor 3', repCode: 'A003', coordinates: [40.7128, -74.006] },
  // Add more advisors as needed
];

const USMap = () => {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {advisors.map(({ name, repCode, coordinates }) => (
        <Marker key={repCode} position={coordinates}>
          <Popup>
            <strong>{name}</strong>
            <br />
            Rep Code: {repCode}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default USMap;
