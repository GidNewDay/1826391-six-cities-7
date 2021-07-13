import React, {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city[0].location[0].latitude,
          lng: city[0].location[0].longitude
        },
        zoom: city[0].location[0].zoom
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
