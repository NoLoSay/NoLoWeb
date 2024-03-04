// Map.tsx

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';


const DEFAULT_WIDTH = 0;
const DEFAULT_HEIGHT = 0;
const DEFAULT_CENTER: [number, number] = [0, 0];
const DEFAULT_ZOOM = 12;

interface MapProps {
  width?: number;
  height?: number;
  center?: [number, number];
}

const styles: { [key: string]: string } = {
  Map: "w-[300%] h-full",
};

const Map: React.FC<MapProps> = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, center=DEFAULT_CENTER } = props;


  useEffect(() => {
    (async function init() {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <div style={{ aspectRatio: width / height }}>
      <MapContainer className={styles.Map} center={center} zoom={DEFAULT_ZOOM}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={DEFAULT_CENTER} />
      </MapContainer>
    </div>
  );
};

export default Map;
