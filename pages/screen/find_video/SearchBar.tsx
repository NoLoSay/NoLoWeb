import React, { useState, useMemo }  from 'react';
import dynamic from 'next/dynamic';
import ImageSlider from "./ImageSlider";
import PlaceList from './PlaceList';
import Map from'./Map/';
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styless from './Home.module.scss';

const DEFAULT_CENTER: [number, number] = [47.216671, -1.55];



interface FindVideoProps {}

const styles: { [key: string]: string } = {
  container: "h-[45px] relative left-[700px] flex flex-row items-center justify-start gap-[20px] max-w-full",
  searchBar: "flex-1 rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start py-[9px] pr-4 pl-[11px] gap-[57px] max-w-full border-[1px] border-solid border-gray-100 mq450:gap-[28px]",
  locationInputContainer: "flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[21px] max-w-full",
  locationTextContainer: "flex flex-row items-center justify-start gap-[9px]",
  locationText: "relative tracking-[-0.41px] leading-[22px] font-medium text-black",
  searchInput: "flex-1 relative tracking-[-0.41px] leading-[22px] font-medium text-gray-100 whitespace-nowrap",
  searchIcon: "h-[13.9px] w-3 relative",
  mapButton: "cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod",
  mapButtonText: "relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left",
  mapIcon: "h-[31px] w-[31px] relative overflow-hidden shrink-0",
};

const SearchBar: React.FC<FindVideoProps> = () => {
    const [currentDiv, setCurrentDiv] = useState<'div1' | 'div2'>('div1');
    const [buttonText, setButtonText] = useState('Voir la carte');
  const [buttonIcon, setButtonIcon] = useState('/icon/search/MapIcon.png');

    const toggleDiv = () => {
        console.log('Toggle Div function called');
        setCurrentDiv(currentDiv === 'div1' ? 'div2' : 'div1');
        if (currentDiv === 'div1') {
            setButtonText('Voir la liste');
            setButtonIcon('/icon/search/ListIcon.png');
          } else {
            setButtonText('Voir la carte');
            setButtonIcon('/icon/search/MapIcon.png');
          }
      };   
  return (
    <div>
        <div>
            <div className={styles.container}>
                <div className={styles.searchBar}>
                    <div className={styles.locationInputContainer}>
                    <div className={styles.locationTextContainer}>
                        <div className={styles.locationText}>Nantes</div>
                        <img className={styles.searchIcon} alt="" src="/icon/search/CityIcon.png" />
                    </div>
                    <div className={styles.searchInput}>Recherche par thème, note...</div>
                    </div>
                    <img className={styles.searchIcon} alt="" src="/icon/search/search.png" />
                </div>
                <div>
                    <button className={styles.mapButton} onClick={toggleDiv}>
                        <div className="relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left">
                            {buttonText}
                        </div>
                        <img
                            className="h-[31px] w-[31px] relative overflow-hidden shrink-0"
                            alt=""
                            src={buttonIcon}
                        />
                    </button>
                </div>
            </div>
        </div>
        <div>
            {currentDiv === 'div1' && (
                <div className="absolute top-[100px] left-[300px]" >
                    <ImageSlider/>
                    <div className="absolute top-[300px]">
                        <PlaceList/>
                    </div>
                </div>
            )}
            {currentDiv === 'div2' && (
                <div className="relative top-10 left-[150px]">
                <Map width="400" height="600" center={DEFAULT_CENTER} zoom={12}>
                {(mapProps: { TileLayer: React.ComponentType<any>; Marker: React.ComponentType<any>; Popup: React.ComponentType<any> }) => (
                  <>
                    <mapProps.TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <mapProps.Marker position={DEFAULT_CENTER}>
                      <mapProps.Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </mapProps.Popup>
                    </mapProps.Marker>
                  </>
                )}
              </Map>
                </div>
            )}
        </div>
    </div>
  );
};

export default SearchBar;
