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
  const [routeDistance, setRouteDistance] = useState(null);

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
              calculateRouteDistance(result);
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

  const calculateRouteDistance = (directionsResult) => {
    const legs = directionsResult.routes[0].legs;
    let totalDistance = 0;

    legs.forEach((leg) => {
      totalDistance += leg.distance.value;
    });

    const distanceInKm = totalDistance / 1000;
    setRouteDistance(distanceInKm);
  };

  const addWaypoint = () => {
    if (waypoints.length < 10) {
      const newWaypoint = window.prompt("Yol noktası girin:");
      if (newWaypoint) {
        setWaypoints((prevWaypoints) => [...prevWaypoints, newWaypoint]);
      }
    } else {
      console.log("Maksimum yol noktası sayısına ulaşıldı.");
    }
  };

  const deleteWaypoint = (index) => {
    setWaypoints((prevWaypoints) => prevWaypoints.filter((_, i) => i !== index));
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
      <br></br>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyANPdIjlr1uM8TOcUPBwzA8x5vM96zT7Iw&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `750px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <div className="create-search">
        <div className="create-start">
          <label>
            <h3>Origin:</h3>
          </label>
          <input
            className="input-create"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div className="create-finish">
          <label>
            <h3>Destination:</h3>
          </label>
          <input
            className="input-create"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-create" onClick={addWaypoint}>
            Add Waypoint
          </button>
        </div>
        <div className="km-hesaplama" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginLeft:"20px", }}>
          <h3>Distance: {routeDistance && <p style={{ fontSize: 36, fontWeight: "bold", color: "hsl(199, 100%, 33%)" }}>{routeDistance} km</p>}</h3>
        </div>

      </div>

      <div className="waypoints-list" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",backgroundColor: "hsl(0, 0%, 93%)" }}>
        <h3>Waypoints:</h3>
        <ul style={{ display: "flex", flexDirection: "row", alignItems: "center", listStyleType: "none", paddingLeft: 0 }}>
          {waypoints.map((waypoint, index) => (
            <li key={index} style={{ marginRight: "1px" ,marginLeft: "5px"}}>
              {waypoint}
              <button className="btn-route-delete" style={{ color: "white", marginLeft: "5px",marginRight: "10px", marginBottom: "10px", marginTop: "10px", width: "60px", height: "30px" }} onClick={() => deleteWaypoint(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>


      {/* <div className="waypoints-list" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"5px"}}>
          <h3>Waypoints:</h3>
          <ul>
            {waypoints.map((waypoint, index) => (
              <li key={index}>
                {waypoint}
            
                <button className="btn-route-delete" style={{color:"white", marginLeft:10, marginBottom:10,marginTop:10, width:70,height:30}} onClick={() => deleteWaypoint(index)}>Delete</button>
                
              </li>
            ))}
          </ul>
        </div> */}

    </div>
  );
};

export default DenemeMap;
