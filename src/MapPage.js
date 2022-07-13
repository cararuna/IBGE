import React from 'react'
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox
} from '@react-google-maps/api'
import './MapPage.css'

/* AIzaSyB5MKmt18qhZ477bfwdTCxiRH1H438bJBU */
const MapPage = props => {
  /* function initMap(){
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
  }) 
  var input = document.getElementById('searchInput');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

  var autocomplete = new google.maps.places.Autocomplete(input)
  autocomplete.bindTo('bounds', map)

  var infowindow = new google.maps.Infowindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  })

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    if (place.geometry.viewport){
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location)
      map.setZoom(17)
    }
    marker.setIcon(({
      url: place.icon,
      size: new google.maps.Size(71,71),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35,35)
    }))
    marker.setPosition(place.geometry.location);
    marker.setVisisble(true)

    var adress = '';
    if (place.adress_components) {
      adress = [
        (place.adress_components[0] && place.address_components[0].short_name || ''),
        (place.adress_components[1] && place.address_components[1].short_name || ''),
        (place.adress_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + adress)
    infowindow.open(map, marker);
    
  })

  } */

  const [map, setMap] = React.useState('')
  const [searchBox, setSearchBox] = React.useState(null)

  const position = {
    lat: -27.590824,
    lng: -48.551262
  }

  const onMapLoad = map => {
    setMap(map)
  }

  const onLoad = ref => {
    setSearchBox(ref)
  }

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces()
    console.log(places)
    const place = places[0]
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0
    }

    map?.panTo(location)
  }

  return (
    <div className="map">
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyCNd7frhz1t_AmgSs-0bNBCbi5qACL6Qis"
        libraries={['places']}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={4}
        >
          {/* <Marker
            position={position}
            options={{
              label: {
                text: 'Posição teste',
                className: 'map-marker'
              }
            }}
          /> */}
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input className="address" placeholder={props.texto} />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapPage
