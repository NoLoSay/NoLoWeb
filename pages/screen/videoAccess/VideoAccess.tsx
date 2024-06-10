import { Fragment, ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import { useLocation } from "react-router-dom";
import { Place } from "@mui/icons-material";
import placesData from "../../../tests/places.json";
import CardTemplate from "../../components/CardTemplate/CardTemplate";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Place = {
  position: [number, number];
  name: string;
  city: string;
  location: string;
  description: string;
  image: string;
  videocount: string;
  website: string;
};

const places: Place[] = placesData as Place[];

const styles: { [key: string]: string } = {
  container: "w-[1280px] mt-8 items-center gap-[35px] max-w-full ml-30",
  CardsDiv:
    " flex  items-center gap-[77px] max-w-full z-[1] text-mini text-darkslategray ",
  customButtonGroup: "custom-button-group",
  container_0: "w-4/5 mx-auto py-14",
  container_1: "flex justify-center items-center",
  container_2: "text-center text-black text-xl font-bold",
  container_3: "h-[300px]",
};

const VideoAccess = () => {
  const locationn = useLocation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [videoCountPlaceholder, setVideoCountPlaceholder] = useState("");
  const [city, setCity] = useState("");
  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    if (locationn.state) {
      const {
        name,
        description,
        imageSrc,
        videoCountPlaceholder,
        city,
        location,
      } = locationn.state;
      setName(name);
      setDescription(description);
      setImageSrc(imageSrc);
      setVideoCountPlaceholder(videoCountPlaceholder);
      setCity(city);
      setLocationText(location);
    }
  }, [locationn.state]);

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <ArtCard
        title={name}
        artImage={imageSrc}
        description={description}
        pagePath=""
      />
      <div className={`container_0 ${styles.container_0}`}>
        <div className={`container_1 ${styles.container_1}`}>
          <p className={`container_2 ${styles.container_2}`}>
            Découvrez d'autres oeuvres similaires :
          </p>
        </div>
        <div className={`container ${styles.container}`}>
          <Carousel
            className={`container_3 ${styles.container_3}`}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3,
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1,
              },
            }}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={300}
            keyBoardControl
            customTransition="transform 500ms ease-in-out"
            transitionDuration={10000}
            containerClass={`carousel-container ${styles.CardsDiv}`}
            itemClass={`carousel-item-padding-40-px ${styles.CardsDiv}`}
            arrows={false}
          >
            {places.map((place, index) => {
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
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

VideoAccess.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
