import React, {useState} from 'react';
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import Pagination from "../../components/Pagination/Pagination";
import FilterListPlace from '../../components/Filter/FilterListPlace';
interface Place {
  name: string;
  description: string;
  image: string;
  videocount: string;
  website:string;
  city: string;
  location:string;
}

interface PlaceListProps {
  places: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {

  const styles: { [key: string]: string } = {
    container: "w-[1280px] mt-8 flex flex-col items-start justify-start gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
    CardsDiv: "self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]",
    pagDiv: "flex justify-center items-center pt-4",
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
        <Pagination totalPages={Math.ceil(places.length / placesPerPage)} currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default PlaceList;
