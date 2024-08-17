import React, { ReactNode, useEffect, useState } from "react";

interface SearchBarProps {
  children: ReactNode;
  userLocation: [number, number];
  places?: { position: [number, number]; name: string; location: string }[];
  onSearch: (query: string) => void;
}

const styles: { [key: string]: string } = {
  container:
    "relative flex flex-row items-center justify-start gap-[20px] max-w-full",

  searchBar:
    "flex-1 rounded-1.5lg bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start py-[9px] pr-4 pl-[11px] gap-[57px] max-w-full border-[1px] border-solid border-gray-100 mq450:gap-[28px]",
  lgsearchBar: "py-[9px] pr-4 pl-[11px] gap-[57px]",

  locationInputContainer:
    "flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[21px] max-w-full",
  locationTextContainer: "flex flex-row items-center justify-start gap-[9px]",
  locationText:
    "relative tracking-[-0.41px] leading-[22px] font-medium text-black",

  searchInput:
    "flex-1 relative tracking-[-0.41px] leading-[22px] font-medium text-base-black whitespace-nowrap",

  searchIcon: "h-[13.9px] w-3 relative",
};

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  userLocation,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");

  useEffect(() => {
    const fetchUserCity = async () => {
      try {
        const [latitude, longitude] = userLocation;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        setUserCity(
          data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.county ||
            data.address.state ||
            data.address.country
        );
      } catch (error) {
        console.error("Error fetching user city:", error);
      }
    };

    fetchUserCity();
  }, [userLocation]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <div className={`container ${styles.container}`}>
          <div className={`searchBar ${styles.searchBar}`}>
            <div
              className={`locationInputContainer ${styles.locationInputContainer}`}
            >
              <div
                className={`locationTextContainer ${styles.locationTextContainer}`}
              >
                <div className={`locationText ${styles.locationText}`}>
                  {userCity}
                </div>
                <img
                  className={`searchIcon ${styles.searchIcon}`}
                  alt=""
                  src="/icon/search/CityIcon.png"
                />
              </div>
              <input
                className={`searchInput ${styles.searchInput}`}
                type="text"
                placeholder="Recherche par thème, note..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            <img
              className={`searchIcon ${styles.searchIcon}`}
              alt=""
              src="/icon/search/search.png"
              onClick={handleSearch}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
