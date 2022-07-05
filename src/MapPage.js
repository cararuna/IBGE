import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import './MapPage.css'

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB5MKmt18qhZ477bfwdTCxiRH1H438bJBU'
  })

  const position = {
    lat: -27.590824,
    lng: -48.551262
  }

  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%',  boxShadow: '0px -3px 5px rgba(31, 73, 125, 0.8), 0px 3px 5px rgba(31, 73, 125, 0.8)' }}
          center={{ lat: -27.590824, lng: -48.551262 }}
          zoom={1}
        >
          <></>
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}

export default MapPage
