import React, { useState , useEffect} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Button } from '@material-ui/core';

const containerStyle = {
  position: 'absolute',
  left: '300px',
  top:'130px',
  width: '800px',
  height: '300px'
};



function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDahCpbg_Vn-j1APD0IJh4Rc0lC4z4OvO0",
  })

  const [center, setCenter] = React.useState({});
  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const getLocation = () => {
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
      } else {
          alert("Geolocalisation is not supported by this browser");
      }
  }

  useEffect(() => {
    const lat = center.lat;
    const lng = center.lng;
    setMarkers(current => [...current, {
       lat: lat,
       lng: lng,
       time: new Date()
   }])
  }, [center]);

  const getCoordinates = (position) => {
     setCenter({
         lat: position.coords.latitude,
         lng: position.coords.longitude
     })
  }

  const handleLocationError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
        default:
          alert("An unknown error occurred.")
          break;
      }
  }

  //if(!isLoaded) return "Loading Maps";

  return isLoaded ? (
      <div style={ {display : 'flex'}}>
        <Button style={ {position: 'absolute', left: '100px', top: '250px'}}
                variant="contained" 
                color="primary"
                onClick={getLocation}
                >find My Position</Button>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={(event) => {
                setMarkers(current => [...current, {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                    time: new Date()
                }])
            }}
        >
            {markers.map(marker => <Marker key={marker.time.toISOString()} position={{ lat:marker.lat, lng:marker.lng}}/>)}

            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap> 
      </div>
  ) : <></>
}

export default React.memo(MyComponent)