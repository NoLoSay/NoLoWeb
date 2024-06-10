import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
interface MapProps {
  center: [number, number];
  places?: {
    position: [number, number];
    name: string;
    description: string;
    location: string;
    city: string;
    website: string;
    image: string;
  }[];
}

const styles: { [key: string]: string } = {
  Map: "relative w-[1280px] h-[800px] md:w-[700px] md:h-[300px] sm:w-[100px] sm:h-[50px] border rounded-lg ",
  Img: "bg-cover bg-center w-[300px] h-[200px]",
  LoadingText: "text-base-black text-base",
};

const Map: React.FC<MapProps> = (props) => {
  const DEFAULT_ZOOM = 12;
  const DEFAULT_CENTER: [number, number] = [0, 0];
  const [Leaflet, setLeaflet] = useState<any>(null);
  const mapRef = useRef<any>(null);
  const { center = DEFAULT_CENTER, places = [] } = props;

  useEffect(() => {
    import("react-leaflet").then((module) => {
      setLeaflet(module);
    });
  }, []);

  useEffect(() => {
    if (!Leaflet) return;

    const L = require("leaflet");

    (async function init() {
      if (!L) return;
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, [Leaflet]);

  const L = require("leaflet");
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const blueIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div>
      {Leaflet ? (
        <div>
          <Leaflet.MapContainer
            ref={mapRef}
            className={`Map ${styles["Map"]}`}
            center={center}
            zoom={DEFAULT_ZOOM}
          >
            <Leaflet.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {center[0] !== 47.216671 && center[1] !== -1.55 && (
              <Leaflet.Marker position={center} icon={blueIcon}>
                <Leaflet.Popup>You are here</Leaflet.Popup>
              </Leaflet.Marker>
            )}
            {places.map((place, index) => (
              <Leaflet.Marker
                key={index}
                position={place.position}
                icon={redIcon}
              >
                <Leaflet.Popup>
                  <div>
                    <img
                      className={`Img ${styles["Img"]}`}
                      loading="eager"
                      alt=""
                      src={place.image}
                    />
                    <p>{place.name}</p>
                    <p>
                      {place.city}, {place.location}
                    </p>
                    <p>Description: {place.description}</p>
                    <p>
                      Website: <Link href={place.website}>{place.website}</Link>
                    </p>
                  </div>
                </Leaflet.Popup>
              </Leaflet.Marker>
            ))}
          </Leaflet.MapContainer>
        </div>
      ) : (
        <div className={`LoadingText ${styles["LoadingText"]}`}>Loading...</div>
      )}
    </div>
  );
};

export default Map;
