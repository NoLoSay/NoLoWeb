import Layout from "../../components/Layout/Layout";
import React, { useState, useEffect }  from 'react';
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PlaceList from './PlaceList';
import Map from'../../components/Map/Map';
import FilterPage from "../../components/Filter/FilterListPlace";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Places } from "./ExempleJSON"

interface FindVideoProps {}

const styles: { [key: string]: string } = {
  mainDiv:"flex justify-center items-center pt-4 ",

  mapButton: "cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod",
  mapButtonText: "relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left",
  mapIcon: "h-[31px] w-[31px] relative overflow-hidden shrink-0",
}

const FindLocation: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  const [currentDiv, setCurrentDiv] = useState<'ListView' | 'MapView'>('ListView');
  const [buttonText, setButtonText] = useState('Voir la carte');
  const [buttonIcon, setButtonIcon] = useState('/icon/search/MapIcon.png');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  
  const [userPosition, setUserPosition] = useState<[number, number]>([47.216671, -1.55]);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSearch = (query: string) => {
    console.log("Recherche effectuée avec la query:", query);
    const queryLower = query.toLowerCase();
    const matchingPlaces = Places.filter(place =>
      place.name.toLowerCase().includes(queryLower) || place.location.toLowerCase().includes(queryLower) || place.city.toLowerCase().includes(queryLower)
    );
    console.log("Lieux correspondants :", matchingPlaces);
    setSearchResults(matchingPlaces);
  };

  const toggleDiv = () => {
      console.log('Toggle Div function called');
      setCurrentDiv(currentDiv === 'ListView' ? 'MapView' : 'ListView');
      if (currentDiv === 'ListView') {
          setButtonText('Voir la liste');
          setButtonIcon('/icon/search/ListIcon.png');
        } else {
          setButtonText('Voir la carte');
          setButtonIcon('/icon/search/MapIcon.png');
        }
  };   
  return (
    <div>
      <div className={`findVideodiv ${styles["mainDiv"]} `}>
        <div>
          <SearchBar userLocation={userPosition} places={Places} onSearch={handleSearch}>
              <div>
                <button className={styles.mapButton} onClick={toggleDiv}>
                    <div className={styles.mapButtonText}>
                        {buttonText}
                    </div>
                    <img
                        className={styles.mapIcon}
                        alt=""
                        src={buttonIcon}
                    />
                </button>
              </div>
            </SearchBar>
          {currentDiv === 'ListView' && (
            <div className="pt-10">
              <ImageSlider/>
              <PlaceList places={searchResults.length > 0 ? searchResults : Places} />            
            </div>
          )}
          {currentDiv === 'MapView' && (
            <div className="pt-4 pb-4">
              <Map center={userPosition} places={searchResults.length > 0 ? searchResults : Places}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FindLocation.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FindLocation;