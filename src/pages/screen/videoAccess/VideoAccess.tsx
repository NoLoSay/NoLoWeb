import { Fragment, ReactNode, useEffect, useState, useContext } from "react";
import Head from "next/head";
import Layout from "@components/Layout/Layout";
import ArtCard from "@components/ArtCard/ArtCard";
import { useLocation } from "react-router-dom";
import { Place } from "@mui/icons-material";
import placesData from "@tests/places.json";
import CardTemplate from "@components/CardTemplate/CardTemplate";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UserContext } from '@global/contexts/UserProvider'


export enum VideoValidationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
}
interface Artwork {
  name: string
  description: string
  location: string
  city: string
  pictures: any[]
  id : any
  videos: { hostingProviderVideoId: string,
            validationStatus: VideoValidationStatus
  }[];
}

const getArt = async (itemId: any, setArt: Function, user: any) => {
  try {
    const url = `https://api.nolosay.com/items/${itemId}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    let artworks = []
    if (response.ok) {
      artworks = await response.json()
      console.log('art: ', artworks)
    } else {
      console.error(`HTTP status ${response.status}: Failed to fetch artworks`)
    }
    setArt(artworks)
  } catch (error) {
    console.error('Failed to fetch artwork details:', error)
  }
}

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
  const { user } = useContext(UserContext)
  const locationn = useLocation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [location, setLocation] = useState("");
  const [art, setArt] = useState<Artwork | null>(null);
  const [videoCountPlaceholder, setVideoCountPlaceholder] = useState("");
  const [id, setId] = useState('');

  useEffect(() => {
    if (locationn.state) {
      const {
        name,
        description,
        imageSrc,
        videoCountPlaceholder,
        location,
        id,
      } = locationn.state;
      setName(name);
      setDescription(description);
      setImageSrc(imageSrc);
      setVideoCountPlaceholder(videoCountPlaceholder);
      setId(id);
      setLocation(location)
      if (user) {
        getArt(id, setArt, user)
      }
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
        videos={art?.videos.filter(video => video.validationStatus === VideoValidationStatus.Approved)}
        location={location}
        id={id}
      />
    </Fragment>
  );
};

export default VideoAccess;
