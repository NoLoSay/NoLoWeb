import { Fragment, useState, ChangeEvent, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import TitleCard from "../../components/TitleCard/TitleCard";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import FilterListArtwork from "../../components/Filter/FilterListArtwork";
import exhibitionsData from "../../../../tests/exhibitions.json";

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
  mainDiv: "flex flex-col space-y-5 m-5",
  listDiv: "relative max-w-full mt-8 flex flex-col items-center gap-[35px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
  cardlistDiv:
    "flex flex-col flex-wrap gap-10 items-center max-w-full z-[1] mb-8 ",
  nbcardlistDiv:
    "flex flex-row gap-10 items-center justify-center mt-8 relative w-full self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray ",
};

const Location = () => {
  const locationn = useLocation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [videoCountPlaceholder, setVideoCountPlaceholder] = useState("");
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");
  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    if (locationn.state) {
      const {
        name,
        description,
        imageSrc,
        videoCountPlaceholder,
        website,
        city,
        location,
      } = locationn.state;
      setName(name);
      setDescription(description);
      setImageSrc(imageSrc);
      setVideoCountPlaceholder(videoCountPlaceholder);
      setWebsite(website);
      setCity(city);
      setLocationText(location);
    }
  }, [locationn.state]);

  type FilteredItems = Artwork[] | Exhibition[];
  const [filteredItems, setFilteredItems] =
    useState<FilteredItems>(exhibitions);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleArtworkTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    if (type === "exhibitions") {
      setFilteredItems(exhibitions);
    } else if (type === "artworks") {
      const allArtworks = exhibitions.flatMap(
        (exhibition) => exhibition.artworks
      );
      setFilteredItems(allArtworks);
    }
  };

  const renderCardInfo = (item: Artwork | Exhibition): any => {
    if (selectedType === "artworks") {
      const artwork = item as Artwork;
      return {
        title: artwork.name,
        description: artwork.description,
        imageSrc: artwork.image,
        location: artwork.location,
        city: artwork.city,
        videoCountPlaceholder: "22 videos",
        pathname: "/videoaccess",
      };
    } else {
      const exhibition = item as Exhibition;
      return {
        title: exhibition.name,
        description: exhibition.description,
        imageSrc: exhibition.image,
        videoCountPlaceholder: `${exhibition.artworks.length} oeuvres`,
        pathname: "/showartwork",
      };
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className={`mainDiv ${styles["mainDiv"]}`}>
        <div className="justify-center w-4/5 mx-auto">
          <TitleCard
            title={name}
            description={description}
            website={website}
            location={`${city}, ${locationText}`}
            imgPath=""
            pagePath="/findlocation/"
          />
        </div>
        <div className={`listDiv ${styles["listDiv"]}`}>
          <FilterListArtwork
            handleArtworkTypeChange={handleArtworkTypeChange}
          />
          <div className={`cardlistDiv ${styles["cardlistDiv"]}`}>
            <div className={`nbcardlistDiv ${styles["nbcardlistDiv"]}`}>
              {filteredItems.map((item, index) => (
                <CardTemplate key={index} cardInfo={renderCardInfo(item)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Location.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Location;
