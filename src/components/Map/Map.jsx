import React from "react"
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps"

import "./Map.scss"

export default function Map(props) {
  const BaseComponent = React.useRef(null)

  if (BaseComponent.current === null) {
    BaseComponent.current = withScriptjs(
      withGoogleMap(() => {
        return (
          <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
          >
            <Marker position={{ lat: props.lat, lng: props.lng }}></Marker>
          </GoogleMap>
        )
      })
    )
  }

  return (
    <div className="Map">
      <BaseComponent.current
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_CLERKANIN_GMAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
