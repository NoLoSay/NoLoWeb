import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  width?: number;
  height?: number;
  center?: [number, number];
}

const Map: React.FC<MapProps> = (props) => {
  const [Leaflet, setLeaflet] = useState<any>(null);

  useEffect(() => {
    // Import dynamique de la bibliothèque Leaflet uniquement côté client
    import('react-leaflet').then((module) => {
      setLeaflet(module);
    });
  }, []);

  const DEFAULT_WIDTH = 0;
  const DEFAULT_HEIGHT = 0;
  const DEFAULT_CENTER: [number, number] = [0, 0];
  const DEFAULT_ZOOM = 12;

  const styles: { [key: string]: string } = {
    Map: "w-[300%] h-full",
  };

  useEffect(() => {
    if (!Leaflet) return;

    // Placez votre logique Leaflet à l'intérieur de cet effet
    const L = require('leaflet');

    (async function init() {
      if (!L) return;
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, [Leaflet]);

  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, center = DEFAULT_CENTER } = props;

  return (
    <div style={{ aspectRatio: width / height }}>
      {Leaflet ? (
        <Leaflet.MapContainer className={styles.Map} center={center} zoom={DEFAULT_ZOOM}>
          <Leaflet.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Leaflet.Marker position={DEFAULT_CENTER} />
        </Leaflet.MapContainer>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Map;
