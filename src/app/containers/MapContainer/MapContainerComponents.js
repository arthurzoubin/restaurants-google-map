import React from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import LoaderComponent from '../../components/Loading';
import {
  GOOGLE_MAP_API_KEY,
} from '../../utils';
import {
  DEFAULT_LOCATION
} from '../../appConstants/locationConstants';
import {
  Images,
} from '../../../Themes';

const GOOGLE_MAP_CONFIG = {
  url: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  zoom: 14,
  center: {
    lat: DEFAULT_LOCATION.lat,
    lng: DEFAULT_LOCATION.lng,
  },
  options: {
    mapTypeControl: false,
  },
};

const ContainerElement = () => (<div style={{ height: `100%` }} />);
const MapElement = () => (<div style={{ height: `100%` }} />);

const MapComponent = compose(
  withProps({
    googleMapURL: GOOGLE_MAP_CONFIG.url,
    loadingElement: <LoaderComponent active />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  const {
    restaurants,
    map,
  } = props;
  let id = null;
  let center = GOOGLE_MAP_CONFIG.center;
  let zoom = GOOGLE_MAP_CONFIG.zoom;
  if (map) {
    id = map.id;
    center = map.center;
    zoom = map.zoom;
  }
  return (
    <GoogleMap
      defaultZoom={GOOGLE_MAP_CONFIG.zoom}
      defaultCenter={GOOGLE_MAP_CONFIG.center}
      defaultOptions={GOOGLE_MAP_CONFIG.options}
      zoom={zoom}
      center={center}
    >
      {
        restaurants.length > 0 ? (
          restaurants.map((item) => (
            <Marker
              key={`restaurant-mark-${item.restaurant.id}`}
              icon={id && id === item.restaurant.id ? null : Images.restaurant.mark}
              position={{ lat: Number(item.restaurant.location.latitude), lng: Number(item.restaurant.location.longitude) }}
            />
          ))
        ) : null
      }
    </GoogleMap>
  );
});

export {
  MapComponent,
};
