import React, { useState, useRef, useEffect } from 'react';
import { 
  BsLinkedin,
  BsFillEnvelopeAtFill,
  BsFillPinMapFill ,
  BsFillTelephoneFill  
 } from "react-icons/bs";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StreetViewPanorama
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '250px',
};

const center = {
  lat: 10.249585419046651,
  lng: 123.79044711447742,
};

const streetViewOptions = {
  position: center,
  pov: { heading: 34, pitch: 10 },
  zoom: 1,
};

function MapComponent() {
  const [address, setAddress] = useState('');
  const [showStreetView, setShowStreetView] = useState(false);
  const mapRef = useRef(null);

  const handleMapLoad = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: center }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          console.log('No address found');
        }
      } else {
        console.error('Geocoder failed due to:', status);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_KEY}>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '400px',
          filter: showStreetView ? 'invert(100%)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          mapTypeId="hybrid"
          onLoad={handleMapLoad}
        >
          <Marker position={center} />
          <StreetViewPanorama
            position={center}
            visible={showStreetView}
            options={streetViewOptions}
          />
        </GoogleMap>

        <div className="contact-details">
          <p>
            <a
              href="https://www.linkedin.com/Kakoi1"
              target="_blank"
              rel="noopener noreferrer"
            >
             <BsLinkedin /> https://www.linkedin.com/Kakoi1
            </a>
          </p>
          <p>
            <a href="mailto:lopezrolandshane@gmail.com">
              <BsFillEnvelopeAtFill /> lopezrolandshane@gmail.com
            </a>
          </p>
          <p><BsFillPinMapFill /> {address || 'Loading address...'}</p>
          <p><BsFillTelephoneFill /> 
 09661805821</p>
        </div>
      </div>
    </LoadScript>
  );
}

export default MapComponent;
