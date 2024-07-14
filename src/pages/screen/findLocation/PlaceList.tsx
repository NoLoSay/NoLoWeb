import React, { useState } from "react";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import Pagination from "../../components/Pagination/Pagination";
import FilterListPlace from "../../components/Filter/FilterListPlace";
interface Place {
  name: string;
  description: string;
  image: string;
  videocount: string;
  website: string;
  city: string;
  location: string;
}

interface PlaceListProps {
  places: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {
  const styles: { [key: string]: string } = {
    container:
      "max-w-full mt-8 flex flex-col items-start justify-start gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
    CardsDiv:
      "flex flex-row gap-10 items-center justify-center mt-8 relative w-full self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]",
    pagDiv: "flex justify-center items-center pt-4",
    leftLine: "absolute flex flex-start self-start ",
    smLeftLine: "sm:hidden",

    rightLine: "absolute flex flex-end self-end ",
    smRightLine: "sm:hidden",
    mdRightLine: "md:hidden",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(12);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlacesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <FilterListPlace handlePerPageChange={handlePerPageChange} />
      <div className={`container ${styles.container}`}>
          <img
            className={`ArtworkToTranslateSelectionScreen/leftLine ${styles["leftLine"]} ${styles["smLeftLine"]}`}
            src="/images/findLocation/Vector 61.png"
            alt="Vector"
          />
          <img
            className={`ArtworkToTranslateSelectionScreen/rightLine ${styles["rightLine"]} ${styles["smRightLine"]} ${styles["mdRightLine"]}`}
            src="/images/findLocation/Vector 62.png"
            alt="Vector"
          />
        <div className={`CardsDiv ${styles.CardsDiv}`}>
          {currentPlaces.map((place, index) => {
            return (
              <CardTemplate
                key={index}
                cardInfo={{
                  title: place.name,
                  description: place.description,
                  imageSrc: place.image,
                  videoCountPlaceholder: place.videocount,
                  website: place.website,
                  city: place.city,
                  location: place.location,
                  pathname: "/location",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={`pagDiv ${styles.pagDiv}`}>
        <Pagination
          totalPages={Math.ceil(places.length / placesPerPage)}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PlaceList;
