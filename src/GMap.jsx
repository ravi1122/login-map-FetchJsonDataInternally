import React, { Component } from "react";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const GMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `45%`, marginTop: `-20%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={props.cities && props.cities.length !== 0 ? 12 : 8}
    defaultCenter={props.center || { lat: 28.7041, lng: 77.1025 }}
    onBoundsChanged={props.onBoundsChanged}
  >
    {props.cities &&
      props.cities.map((city, index) => (
        <MarkerWithLabel
          key={index}
          position={{ lat: Number(city.lat), lng: Number(city.lng) }}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{
            backgroundColor: "#b7dceb",
            borderRadius: "50%",
            transform: "translate(-50%, -100%)",
            fontSize: "24px",
            padding: "100px"
          }}
        >
          <div>{city.population}
          </div>

        </MarkerWithLabel>
      ))}
  </GoogleMap>

));

export default GMap;
