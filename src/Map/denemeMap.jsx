import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

const DenemeMap = () => {
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [waypoints, setWaypoints] = useState([]);

  useEffect(() => {
    const calculateDirections = () => {
      if (window.google && window.google.maps) {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            waypoints: waypoints.map((waypoint) => ({ location: waypoint })),
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`Yönler alınamadı. Hata kodu: ${status}`);
            }
          }
        );
      }
    };
  
    if (origin.trim() !== "" && destination.trim() !== "") {
      calculateDirections();
    }
  }, [origin, destination, waypoints]);

  const addWaypoint = () => {
    if (waypoints.length < 10) {
      const newWaypoint = window.prompt("Yol noktası girin:");
      if (newWaypoint) {
        setWaypoints(prevWaypoints => [...prevWaypoints, newWaypoint]);
      }
    } else {
      console.log("Maksimum yol noktası sayısına ulaşıldı.");
    }
  };

  const MapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 39.57, lng: 32.53 }}>
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    ))
  );

  return (
    <div className="createroute">
      <div >
        <label >Başlangıç:</label>
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </div>
      <div>
        <label>Hedef:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
      <div>
        <button onClick={addWaypoint}>Yol Noktası Ekle</button>
      </div>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default DenemeMap;
