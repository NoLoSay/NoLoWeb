import { Fragment, useState, ChangeEvent } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import TitleCard from "../../components/TitleCard/TitleCard";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import { ReactNode } from "react";
import { GetServerSideProps } from 'next';
import FilterListArtwork from "../../components/Filter/FilterListArtwork";
import { exhibitions } from './ExempleJSON'; // Importer la nouvelle liste d'expositions

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

interface LocationProps {
  name: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website: string;
  city: string;
  location: string;
}

const styles: { [key: string]: string } = {
  mainDiv:"flex flex-col space-y-5 m-5 justify-center w-3/4 mx-auto",
  listDiv:"flex flex-col",
  cardlistDiv:"w-[1280px] mt-8 flex flex-col items-start justify-start gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
  nbcardlistDiv:"self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]",
}

const Location = ({ name, description, imageSrc, videoCountPlaceholder, website, city, location }: LocationProps) => {
  type FilteredItems = Artwork[] | Exhibition[];
  const [filteredItems, setFilteredItems] = useState<FilteredItems>(exhibitions);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleArtworkTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    if (type === "exhibitions") {
      setFilteredItems(exhibitions);
    } else if (type === "artworks") {
      const allArtworks = exhibitions.flatMap(exhibition => exhibition.artworks);
      setFilteredItems(allArtworks);
    }
  }  

  const renderCardInfo = (item: Artwork | Exhibition): any => {
    if (selectedType === "artworks"){
      const artwork = item as Artwork;
      return {
        title: artwork.name,
        description: artwork.description,
        imageSrc: artwork.image,
        location: artwork.location,
        city: artwork.city,
        videoCountPlaceholder: "22 videos",
        pathname: "/screen/videoAccess/VideoAcess/",
      };
    } else {
      const exhibition = item as Exhibition;
      return {
        title: exhibition.name,
        description: exhibition.description,
        imageSrc: exhibition.image,
        location: location,
        city: city,
        videoCountPlaceholder: `${exhibition.artworks.length} oeuvres`,
        pathname: "/screen/videoAccess/VideoAcess/",
      };
    }
  }  

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className={`mainDiv ${styles["mainDiv"]}`}>
        <TitleCard
          title={name}
          description={description}
          website={website}
          location={`${city}, ${location}`}
          imgPath=""
          pagePath="../findLocation/FindLocation/"
        />
        <div className={`listDiv ${styles["listDiv"]}`}>
          <FilterListArtwork handleArtworkTypeChange={handleArtworkTypeChange} />
          <div className={`cardlistDiv ${styles["cardlistDiv"]}`}>
            <div className={`nbcardlistDiv ${styles["nbcardlistDiv"]}`} >
              {filteredItems.map((item, index) => (
                <CardTemplate
                  key={index}
                  cardInfo={renderCardInfo(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<LocationProps> = async (context) => {
  const { query } = context;
  
  return {
    props: {
      name: query.name as string,
      description: query.description as string,
      imageSrc: query.imageSrc as string,
      videoCountPlaceholder: query.videoCountPlaceholder as string,
      website: query.website as string,
      city: query.city as string,
      location: query.location as string,
    },
  };
};

Location.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Location;
