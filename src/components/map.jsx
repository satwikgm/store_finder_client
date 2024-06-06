import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "../styles/mapStyle.css";

export default function Map({center}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const tokyo = { lng: 139.753, lat: 35.6844 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'FqucZnXk2iGtfTzLv071';

  useEffect(() => {
    // if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [center.lng, center.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([center.lng,center.lat])
      .addTo(map.current);

  }, [center]);



  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

    // const style = {
    // mapWrap: {
    //     position: "relative",
    //     width: "100%",
    //     height: "calc(100vh-77px)", /* calculate height of the screen minus the heading */
    //   },
    //   map: {
    //     position: "absolute",
    //     width: "100%",
    //     height: "100%",
    //   },
    // };