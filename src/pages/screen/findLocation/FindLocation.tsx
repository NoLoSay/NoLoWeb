import Layout from "../../components/Layout/Layout";
import React, {useContext, useState, useEffect } from "react";
import { UserContext } from "../../../global/contexts/UserProvider";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PlaceList from "./PlaceList";
import Map from "../../components/Map/Map";
import SearchBar from "../../components/SearchBar/SearchBar";
import placesData from "../../../../tests/places.json";

type Place = {
  position: [number, number];
  name: string;
  city: string;
  location: string;
  shortDescription: string;
  picture: string;
  videocount: string;
  website: string;
  exhibition: any[];
  adresse: {
    longitude: number;
    latitude: number;
  };
};

interface FindVideoProps {}


const styles: { [key: string]: string } = {
  mainDiv: "flex justify-center items-center pt-4 ",
  mapButton:
    "cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-1.5lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 " +
    "hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod",
  mapButtonText:
    "relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left",
  mapIcon: "h-[31px] w-[31px] relative overflow-hidden shrink-0",

  mapView: "pt-4 pb-4",
  listView: "pt-10",
};

const FindLocation: React.FC<FindVideoProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  const [currentDiv, setCurrentDiv] = useState<"ListView" | "MapView">(
    "ListView"
  );
  const [buttonText, setButtonText] = useState("Voir la carte");
  const [buttonIcon, setButtonIcon] = useState("/icon/search/MapIcon.png");

  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [userPosition, setUserPosition] = useState<[number, number]>([
    47.216671, -1.55,
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
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
    const queryLower = query.toLowerCase();
    const matchingPlaces = places.filter(
      (place) =>
        place.name.toLowerCase().includes(queryLower) ||
        place.location.toLowerCase().includes(queryLower) ||
        place.city.toLowerCase().includes(queryLower)
    );
    setSearchResults(matchingPlaces);
  };

  const toggleDiv = () => {
    setCurrentDiv(currentDiv === "ListView" ? "MapView" : "ListView");
    if (currentDiv === "ListView") {
      setButtonText("Voir la liste");
      setButtonIcon("/icon/search/ListIcon.png");
    } else {
      setButtonText("Voir la carte");
      setButtonIcon("/icon/search/MapIcon.png");
    }
  };

  const { user, setUser } = useContext(UserContext);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:3001/sites`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
              "Content-Type": "application/json",
            },
          });
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        const data = await response.json();
        const transformedData = data.map((place: Place) => ({
          ...place,
          videocount: place.exhibition.length.toString() + " exposition",
          //position: [place.adresse.latitude, place.adresse.longitude],
        }));
        setPlaces(transformedData);
        console.log("Places:", transformedData);
        setSearchResults(transformedData);
      } catch (error) {
          console.error("Failed to fetch exhibition details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className={`mainDiv ${styles.mainDiv}`}>
        <div>
          <SearchBar
            userLocation={userPosition}
            places={places}
            onSearch={handleSearch}
          >
            <div>
              <button
                className={`mapButton ${styles.mapButton}`}
                onClick={toggleDiv}
              >
                <div className={`mapButtonText ${styles.mapButtonText}`}>
                  {buttonText}
                </div>
                <img
                  className={`mapIcon ${styles.mapIcon}`}
                  alt=""
                  src={buttonIcon}
                />
              </button>
            </div>
          </SearchBar>
          {currentDiv === "ListView" && (
            <div className={`listView ${styles.listView}`}>
              <ImageSlider />
              <PlaceList
                places={searchResults.length > 0 ? searchResults : places}
              />
            </div>
          )}
          {currentDiv === "MapView" && (
            <div className={`mapView ${styles.mapView}`}>
              <Map
                center={userPosition}
                places={searchResults.length > 0 ? searchResults : places}
              />
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
