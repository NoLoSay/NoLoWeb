import React, { useState, useEffect, ChangeEvent } from 'react';
import { Paper } from "@mui/material";
import { useLocation } from 'react-router-dom';
import FilterListArtwork from "../../../components/Filter/FilterListArtwork";
import CardTemplate from "../../../components/CardTemplate/CardTemplate";
import exhibitionsData from '../exhibitions.json';
import { ButtonBase } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";
import { useNavigate } from 'react-router-dom';
import FilterListExhibitions from '../../../components/Filter/FilterListExhibitions';

interface Artwork {
  name: string;
  description: string;
  location: string;
  city: string;
  image: string;
}

interface Exhibition {
  name: string;
  description: string;
  image: string;
  artworks: Artwork[];
}

const exhibitions: Exhibition[] = exhibitionsData.exhibitions;

const styles: { [key: string]: string } = {
  mainDiv: "flex flex-col space-y-5 m-5 justify-center w-3/4 mx-auto",
  listDiv: "flex flex-col",
  cardlistDiv: "w-[1280px] mt-8 ml-8 flex flex-col items-start justify-start gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
  nbcardlistDiv: "self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]",
};

const ShowArtwork = () => {
  const locationn = useLocation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    if (locationn.state) {
      const { name, description, imageSrc } = locationn.state;
      setTitle(name);
      setDescription(description);
      setImageSrc(imageSrc);
      console.log(title)
      const exhibition = exhibitions.find(exhibition => exhibition.name === name);
      if (exhibition) {
        setArtworks(exhibition.artworks);
      }
      console.log(artworks)
    }
  }, [locationn.state]);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(12); 

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = exhibitions.slice(indexOfFirstPlace, indexOfLastPlace);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlacesPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col space-y-5 m-5 w-4/5 mx-auto">
      <Paper className="flex p-5 flex-col space-x-5 w-full items-center justify-around border-solid border-4 border-yellow-300">
        <div className="flex flex-col">
          <div className='flex flex-row ml-2 mr-7 p-2'>
              <div className='mt-36 ' onClick={() => navigate(-1)}>
                  <ButtonBase className="flex-shrink-0 pr-10">
                    <ArrowBackIosNewRounded sx={{ color: "Grey-300" }} />
                  </ButtonBase>
              </div>
            <div className="w-1/3 mr-2 pl-4">
              <img src={imageSrc} alt="Image" className='flex h-80 w-96 rounded-1.5lg shadow-lg'/>
            </div>
            <div className="w-2/3 border ml-10">
              <div className="p-5 m-4 flex flex-col justify-between h-full">
                <div>
                  <p className="font-bold text-4xl">{title}</p>
                  <div className='flex items-center pt-5'>
                    <p className='font-bold text-xl mr-2'>Description:</p>
                    <p>{description}</p>
                  </div>
                  <div className='flex items-center pt-5'>
                    <p className='font-bold text-xl mr-2'>Type d'exposition:</p>
                    <p>{`Art moderne`}</p>
                  </div>
                  <div className='flex items-center pt-5'>
                    <p className='font-bold text-xl mr-2'>Date de création:</p>
                    <p>{`Juillet 2018`}</p>
                  </div>
                  <div className='flex items-center pt-5'>
                    <p className='font-bold text-xl mr-2'>Lieu:</p>
                    <p>{`Château des Ducs de Bretagne, Nantes`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <div className={`listDiv ${styles.listDiv}`}>
         <FilterListExhibitions handlePerPageChange={handlePerPageChange} />
        <div className={`cardlistDiv ${styles.cardlistDiv}`}>
          <div className={`nbcardlistDiv ${styles.nbcardlistDiv}`}>
            {artworks.map((artwork, index) => (
              <CardTemplate
                key={index}
                cardInfo={{
                  title: artwork.name,
                  description: artwork.description,
                  imageSrc: artwork.image,
                  location: artwork.location,
                  city: artwork.city,
                  videoCountPlaceholder: "22 videos",
                  pathname: "/videoaccess",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowArtwork;
