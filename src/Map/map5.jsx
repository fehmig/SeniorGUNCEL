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



class Map5 extends Component {
    state = {
        directions: null,


};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat:38.66059282487972, lng:34.819161794825284};
    const destination = { lat: 38.37820717883128, lng: 34.73436527589273};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(38.66059282487972, 34.819161794825284)
                },
                {
                    location: new google.maps.LatLng(38.6364240636706, 34.902056250116566)
                },
                {
                    location: new google.maps.LatLng(38.37820717883128, 34.73436527589273)
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
                containerElement={<div style={{ height: `1099px`, width: "100%"}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

            
        </div>


       );
    }
}

export default Map5;