import { Fragment, ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import infosJson from "../../../stories/assets/testArtCard.json"
import VideoVignette from "../../components/VideoVignette/VideoVignette";
import { useLocation } from 'react-router-dom';


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
      const { name, description, imageSrc, videoCountPlaceholder, city, location } = locationn.state;
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
      <div>
      <ArtCard
          title={name}
          artImage={imageSrc}
          videoPath={"infosJson.videoPath"}
          description={description}
          spec={infosJson.spec}
          pagePath=""/>
        <div className="w-4/5 mx-auto py-14">
          <p className="text-black">Découvrez d'autres oeuvres similaires :</p>
          <div className=" grid grid-cols-3 space-5">
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={3} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={96} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={12} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={54} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

VideoAccess.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
