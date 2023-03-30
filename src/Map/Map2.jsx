import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

/*global google*/


   const containerStyle = {
     width: '645px',
     height: '400px',
     margin: "auto"
    };



class Map2 extends Component {
    state = {
        directions: null,


};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat:40.610519 , lng:43.099110};
    const destination = { lat: 38.503490, lng: 43.396450};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(39.901501, 41.264549)
                },
                {
                    location: new google.maps.LatLng(38.740189,41.494919)
                },
                {
                    location: new google.maps.LatLng(38.400569,42.109502)
                }
               
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );
}

render() {
    const GoogleMapExample = withGoogleMap(props => (

      
        <GoogleMap
           
            defaultCenter={{ lat: 40.730190, lng:31.600210  }}
            defaultZoom={4}
            
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
        
    ));

    return (

    
        <div>

            
            <GoogleMapExample
                containerElement={<div style={{ height: `500px`, width: "800px"}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

            
        </div>


       );
    }
}

export default Map2;