'use client';

import { MAP_CONFIG } from '@/constants/map';
import type { ILocation } from '@/types';
import '@/utils/leaflet';
import { greenIcon } from '@/utils/leaflet';
import { useGeolocation } from '@uidotdev/usehooks';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const { zoom, center } = MAP_CONFIG;

const containerStyle = {
  height: '80vh',
  width: '100%',
};

export default function Map({ locations }: { locations?: ILocation[] }) {
  const { latitude, longitude } = useGeolocation();

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      style={containerStyle}>
      {latitude && longitude && (
        <Marker zIndexOffset={9999} icon={greenIcon} position={{ lat: latitude, lng: longitude }}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations?.map(({ id, name, address, lat, lng }) => (
        <Marker key={id} position={{ lat, lng }}>
          <Popup>
            <div>
              <div>
                <strong>{name}</strong>
              </div>
              <div>{address}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

/**
 * TODO
 * - stop at click event and fly to center
 * - marker clustering
 * - move and refactor filter functions
 * - update popup to right panel single selection details
 * - Update algolia setup on geo filtering, taggings
 */
