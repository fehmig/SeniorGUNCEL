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



class Map3 extends Component {
    state = {
        directions: null,


};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat:37.718336 , lng:30.282333};
    const destination = { lat: 37.000000, lng: 35.321335};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(36.549362, 31.996994)
                },
                {
                    location: new google.maps.LatLng(36.812103,34.641479)
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

export default Map3;