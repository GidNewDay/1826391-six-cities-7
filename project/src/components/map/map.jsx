// компонент «Карта»
import React, {useRef, useEffect} from 'react';
import offerProp from '../offer/offer.prop';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

function Map({city, points, activeCard}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [25, 35],
    iconAnchor: [15, 30],
  });

  const iconActive = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [25, 35],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: (point.title === activeCard.title)
              ? iconActive
              : icon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  city: PropTypes.arrayOf(offerProp).isRequired,
  points: PropTypes.arrayOf(offerProp).isRequired,
  activeCard: PropTypes.arrayOf(offerProp).isRequired,
};

export default Map;
