import Layout from "../../components/Layout/Layout";
import React, { useState, useEffect }  from 'react';
import ImageSlider from "./Views/List/ImageSlider";
import PlaceList from './Views/List/PlaceList';
import Map from'./Views/Map/Map';
import FilterPage from "./Views/List/Filter";
import SearchBar from "./Views/SearchBar";

interface FindVideoProps {}

const styles: { [key: string]: string } = {
  mainDiv:"flex justify-center items-center pt-4 ",

  mapButton: "cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod",
  mapButtonText: "relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left",
  mapIcon: "h-[31px] w-[31px] relative overflow-hidden shrink-0",
}

const FindVideo: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  const [currentDiv, setCurrentDiv] = useState<'ListView' | 'MapView'>('ListView');
  const [buttonText, setButtonText] = useState('Voir la carte');
  const [buttonIcon, setButtonIcon] = useState('/icon/search/MapIcon.png');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const nantesPlaces: { position: [number, number]; name: string; city: string; location: string; description : string, image: string, videocount: string, website: string}[] = [
    { position: [47.2186371, -1.5541362], 
      name: "Château des Ducs de Bretagne", 
      city: "Nantes", location: "France", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      image: "/images/castle/castle-template-list.png", 
      videocount: "22 Vidéos",
      website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2146061, -1.5562657], name: "Cathédrale Saint-Pierre et Saint-Paul de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2133658, -1.5580792], name: "Place Royale", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2109537, -1.5623094], name: "Île de Versailles", city: "Paris", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
    { position: [47.2170899, -1.5537168], name: "Jardin des Plantes de Nantes", city: "Nantes", location: "France", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/images/castle/castle-template-list.png", videocount: "22 Vidéos", website: "https://www.chateaunantes.fr/"},
  ];
  
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
    const matchingPlaces = nantesPlaces.filter(place =>
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
          <SearchBar userLocation={userPosition} places={nantesPlaces} onSearch={handleSearch}>
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
              <PlaceList places={searchResults.length > 0 ? searchResults : nantesPlaces} />            
            </div>
          )}
          {currentDiv === 'MapView' && (
            <div className="pt-4 pb-4">
              <Map center={userPosition} places={searchResults.length > 0 ? searchResults : nantesPlaces}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FindVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FindVideo;
