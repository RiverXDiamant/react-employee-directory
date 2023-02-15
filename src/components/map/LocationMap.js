// component
import React from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "react";

const AnyReactComponent = ({ text }) => <Box>{text}</Box>;

export default function LocationMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <Box style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwyxLxeYFL5ObcbLNehHM9Z2LlG5OhVEc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </Box>
  );
}
