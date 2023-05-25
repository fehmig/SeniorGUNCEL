import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";

/*global google*/
   const id  = "a4b18cf73174034c"

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

    const origin = { lat:40.730190 , lng: 31.600210};
    const destination = { lat: 41.026089, lng: 40.518929};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(40.839989,  31.155060)
                },
                {
                    location: new google.maps.LatLng(41.450508,31.789339)
                },
                {
                    location: new google.maps.LatLng(41.625839,32.329342)
                },
                {
                    location: new google.maps.LatLng(41.289452,36.339279)
                },
                {
                    location: new google.maps.LatLng(41.37805, 33.77528)
                },
                {
                    location: new google.maps.LatLng(42.02683, 35.16253)
                },
                {
                    location: new google.maps.LatLng(40.985860,37.879800)
                },
                {
                    location: new google.maps.LatLng(41.002071,39.719219)
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
            mapId={id}
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
        
    ));

    return (

    
        <div>

            
            <GoogleMapExample
                containerElement={<div style={{ height: `900px`, width: `100%`}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

            
        </div>


       );
    }
}

export default Map2;