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



class Map4 extends Component {
    state = {
        directions: null,


};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat:41.02566299779966, lng:28.974380790744853};
    const destination = { lat: 41.021140631694664, lng: 29.004129375021446};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(41.02566299779966, 28.974380790744853)
                },
                {
                    location: new google.maps.LatLng(41.00847302866694, 28.977877997196835)
                },
                {
                    location: new google.maps.LatLng(41.00860731902211, 28.980187860514583)
                },
                {
                    location: new google.maps.LatLng(41.021140631694664, 29.004129375021446)
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
                containerElement={<div style={{ height: `900px`, width: "100%"}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

            
        </div>


       );
    }
}

export default Map4;